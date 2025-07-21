from fastapi import HTTPException

from validators import get_is_username_valid


def validate_username(username: str) -> None:
    validate_username_length(username)
    validate_username_pattern(username)


def validate_username_length(username: str) -> None:
    if len(username) < 3:
        raise HTTPException(
            status_code=422, detail="Username must be at least 3 characters long"
        )
    if len(username) >= 20:
        raise HTTPException(
            status_code=422, detail="Username must be at most 20 characters long"
        )


def validate_username_pattern(username: str) -> None:
    if not get_is_username_valid(username):
        raise HTTPException(
            status_code=422,
            detail="Username can only contain letters, numbers, and underscores",
        )
