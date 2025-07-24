from fastapi.security import HTTPAuthorizationCredentials

from auth import Auth

auth_handler = Auth()


def get_email_from_auth_credentials(credentials: HTTPAuthorizationCredentials):
    token = credentials.credentials
    payload = auth_handler.decode_token(token)
    return payload["sub"]
