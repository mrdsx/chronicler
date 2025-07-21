from fastapi import HTTPException

from constants import MIN_PASSWORD_LENGTH
from validators import get_is_password_valid


def validate_password(password: str) -> None:
    if len(password) < MIN_PASSWORD_LENGTH:
        raise HTTPException(status_code=422, detail="Password is too short")
    if not get_is_password_valid(password):
        raise HTTPException(
            status_code=422,
            detail="Password must contain letters, numbers, and special characters",
        )


def validate_password_and_confirm_password(
    password: str, confirm_password: str
) -> None:
    if password != confirm_password:
        raise HTTPException(
            status_code=422, detail="New password and confirm password does not match"
        )
