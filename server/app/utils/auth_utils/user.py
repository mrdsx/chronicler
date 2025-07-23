from fastapi import HTTPException, status

from db.users.users_db import get_user_by_email, get_user_by_username


def validate_user_not_exists(username: str, email: str) -> None:
    if get_user_by_username(username):
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT, detail="Username is already taken"
        )

    if get_user_by_email(email):
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Email is already associated with account",
        )
