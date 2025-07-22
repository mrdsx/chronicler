from fastapi import APIRouter, HTTPException, status

import endpoints
from auth import Auth
from schemas.notes_schemas import NoteSchema, PartialNoteSchema

auth_handler = Auth()
router = APIRouter(prefix=endpoints.API)


mock_notes = {
    "1": {
        "title": "Welcome Note",
        "content": "This is your first note in Chronicler. Start capturing your thoughts!",
    },
    "2": {
        "title": "Todo List",
        "content": "1. Refactor auth system\n2. Write validators\n3. Push to GitHub",
    },
    "3": {
        "title": "Quote of the Day",
        "content": '"Code is like humor. When you have to explain it, it’s bad." – Cory House',
    },
}
last_note_id = len(mock_notes)


@router.get("/notes")
def get_notes():
    return mock_notes


@router.get("/notes/{note_id}", response_model=NoteSchema)
def get_note_by_id(note_id: str):
    if note_id not in mock_notes:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Note not found"
        )

    return mock_notes[note_id]


@router.post("/notes", response_model=NoteSchema)
def create_note(note: NoteSchema):
    global last_note_id
    last_note_id += 1

    mock_notes[str(last_note_id)] = note
    return note


@router.patch("/notes/{note_id}")
def update_note(note_id: str, note: PartialNoteSchema):
    if note_id not in mock_notes:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Note not found"
        )

    if note.title is not None and len(note.title) <= 0:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY, detail="Title is required"
        )

    for key, value in dict(note).items():
        if value is not None:
            mock_notes[note_id][key] = value

    return mock_notes[note_id]


@router.delete("/notes/{note_id}")
def delete_note_by_id(note_id: str):
    if note_id not in mock_notes:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Note not found"
        )

    del mock_notes[note_id]
    return {"detail": "Successfully deleted note"}
