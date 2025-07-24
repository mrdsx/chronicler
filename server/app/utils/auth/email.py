from fastapi.security import HTTPAuthorizationCredentials

from auth import Auth
from utils.auth.errors import raise_exception_invalid_token

auth_handler = Auth()


def get_email_from_auth_credentials(credentials: HTTPAuthorizationCredentials):
    token = credentials.credentials
    payload = auth_handler.decode_token(token)

    email = payload["sub"]
    if email is None:
        raise_exception_invalid_token()

    return email
