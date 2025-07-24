from fastapi import APIRouter, Security
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from jwt import PyJWTError

import endpoints
from auth import Auth
from db.notes import get_notes_by_user_id, save_note
from db.users import get_user_by_email
from schemas.notes_schemas import Input_NoteSchema, Input_PartialNoteSchema, NoteSchema
from utils.auth import get_email_from_auth_credentials, raise_exception_invalid_token
from utils.notes import (
    mock_notes,
    validate_note_exists,
    validate_note_title,
)

auth_handler = Auth()
router = APIRouter(prefix=endpoints.API)
security = HTTPBearer()

last_note_id = len(mock_notes)


@router.get("/notes", response_model=list[NoteSchema])
def get_notes(credentials: HTTPAuthorizationCredentials = Security(security)):
    email = get_email_from_auth_credentials(credentials)
    user = get_user_by_email(email)
    notes = get_notes_by_user_id(user.id)

    return notes


@router.post("/notes", response_model=NoteSchema)
def create_note(
    note: Input_NoteSchema,
    credentials: HTTPAuthorizationCredentials = Security(security),
):
    try:
        validate_note_title(note.title)

        email = get_email_from_auth_credentials(credentials)
        user = get_user_by_email(email)
        new_note = save_note(note=note, user_id=user.id)

        return new_note
    except PyJWTError:
        raise_exception_invalid_token()


# TODO: add database data
@router.patch("/notes/{note_id}")
def update_note(note_id: int, note: Input_PartialNoteSchema):
    validate_note_exists(note_id)
    validate_note_title(note.title)


@router.delete("/notes/{note_id}")
def delete_note_by_id(note_id: str):
    validate_note_exists(note_id)

    del mock_notes[note_id]
    return {"detail": "Successfully deleted note"}
