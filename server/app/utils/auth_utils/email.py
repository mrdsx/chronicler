from fastapi import HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials

from auth import Auth
from .validators import get_is_email_valid

auth_handler = Auth()


def validate_email_address(email: str) -> None:
    is_email_valid, _msg = get_is_email_valid(email)
    if not is_email_valid:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY, detail="Invalid email"
        )


def get_email_from_auth_credentials(credentials: HTTPAuthorizationCredentials):
    token = credentials.credentials
    payload = auth_handler.decode_token(token)
    return payload["sub"]
