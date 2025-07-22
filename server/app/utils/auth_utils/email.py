from fastapi import HTTPException, status

from .validators import get_is_email_valid


def validate_email_address(email: str) -> None:
    is_email_valid, _msg = get_is_email_valid(email)
    if not is_email_valid:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY, detail="Invalid email"
        )
