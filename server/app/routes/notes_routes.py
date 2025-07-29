from fastapi import APIRouter, HTTPException, Security, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from jwt import PyJWTError

import endpoints
from auth import Auth
from db.notes import (
    delete_note_by_id,
    get_note_by_id,
    get_notes_by_user_id,
    save_note,
    update_note_by_id,
)
from db.users import get_user_by_email
from schemas.notes_schemas import (
    Input_NoteSchema,
    Input_PartialNoteSchema,
    NoteSchema,
)
from utils.auth import get_email_from_auth_credentials, raise_exception_invalid_token
from utils.notes import (
    validate_note_exists,
    validate_note_title,
)

auth_handler = Auth()
router = APIRouter(prefix=endpoints.API)
security = HTTPBearer()


@router.get("/notes", response_model=list[NoteSchema])
async def get_notes(credentials: HTTPAuthorizationCredentials = Security(security)):
    email = get_email_from_auth_credentials(credentials)
    user = await get_user_by_email(email)
    notes = await get_notes_by_user_id(user.id)
    return notes


@router.post("/notes", response_model=NoteSchema)
async def create_note(
    note: Input_NoteSchema,
    credentials: HTTPAuthorizationCredentials = Security(security),
):
    try:
        validate_note_title(note.title)

        email = get_email_from_auth_credentials(credentials)
        user = await get_user_by_email(email)
        new_note = await save_note(note=note, user_id=user.id)
        return new_note
    except PyJWTError:
        raise_exception_invalid_token()


@router.patch("/notes/{note_id}", response_model=NoteSchema)
async def update_note(
    note_id: int,
    note: Input_PartialNoteSchema,
    credentials: HTTPAuthorizationCredentials = Security(security),
):
    await validate_note_exists(note_id)
    validate_note_title(note.title)

    email = get_email_from_auth_credentials(credentials)
    user = await get_user_by_email(email)
    target_note = await get_note_by_id(note_id)

    if user.id != target_note.user_id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN, detail="Access denied"
        )

    updated_note = update_note_by_id(note_id, note)
    return updated_note


@router.delete("/notes/{note_id}")
async def delete_note(
    note_id: int, credentials: HTTPAuthorizationCredentials = Security(security)
):
    await validate_note_exists(note_id)

    email = get_email_from_auth_credentials(credentials)
    user = await get_user_by_email(email)
    target_note = await get_note_by_id(note_id)

    if user.id != target_note.user_id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN, detail="Access denied"
        )

    await delete_note_by_id(note_id)
    return {"detail": "Successfully deleted note"}
