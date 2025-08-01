from fastapi import HTTPException, status

from db.notes import get_note_by_id


async def validate_note_exists(note_id: int) -> None:
    if await get_note_by_id(note_id) is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Note not found"
        )


def validate_note_title(title: str | None) -> None:
    if title is not None and len(title) == 0:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail="Title must not be empty string",
        )
