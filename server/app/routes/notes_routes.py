from fastapi import APIRouter

import endpoints
from auth import Auth
from schemas.notes_schemas import NoteSchema, PartialNoteSchema
from utils.notes_utils.notes import (
    mock_notes,
    validate_note_exists,
    validate_note_title,
)

auth_handler = Auth()
router = APIRouter(prefix=endpoints.API)


last_note_id = len(mock_notes)


@router.get("/notes", response_model=dict[str, NoteSchema])
def get_notes():
    return mock_notes


@router.get("/notes/{note_id}", response_model=NoteSchema)
def get_note_by_id(note_id: str):
    validate_note_exists(note_id)

    return mock_notes[note_id]


@router.post("/notes", response_model=NoteSchema)
def create_note(note: NoteSchema):
    validate_note_title(note.title)

    global last_note_id
    last_note_id += 1

    mock_notes[str(last_note_id)] = note
    return note


@router.patch("/notes/{note_id}", response_model=NoteSchema)
def update_note(note_id: str, note: PartialNoteSchema):
    validate_note_exists(note_id)
    validate_note_title(note.title)

    for key, value in dict(note).items():
        if value is not None:
            mock_notes[note_id][key] = value

    return mock_notes[note_id]


@router.delete("/notes/{note_id}")
def delete_note_by_id(note_id: str):
    validate_note_exists(note_id)

    del mock_notes[note_id]
    return {"detail": "Successfully deleted note"}
