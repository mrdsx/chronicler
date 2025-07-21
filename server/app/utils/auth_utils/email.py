from fastapi import HTTPException

from .validators import get_is_email_valid


def validate_email_address(email: str) -> None:
    is_email_valid, _msg = get_is_email_valid(email)
    if not is_email_valid:
        raise HTTPException(status_code=422, detail="Invalid email")
