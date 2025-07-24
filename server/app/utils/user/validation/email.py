from fastapi import HTTPException, status

from auth import Auth
from ..validators import get_is_email_valid

auth_handler = Auth()


def validate_email_address(email: str) -> None:
    if not get_is_email_valid(email):
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY, detail="Invalid email"
        )
