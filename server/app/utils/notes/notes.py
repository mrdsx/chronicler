from fastapi import HTTPException, status

from db.notes import get_note_by_id

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


def validate_note_exists(note_id: str) -> None:
    if get_note_by_id(note_id) is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Note not found"
        )


def validate_note_title(title: str | None) -> None:
    if title is not None and len(title) == 0:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail="Title must not be empty string",
        )
