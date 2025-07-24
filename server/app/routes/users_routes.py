from fastapi import APIRouter, Security
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from jwt import PyJWTError

import endpoints
from auth import Auth
from db.users import get_user_by_email
from schemas.users_schemas import PublicUserSchema
from utils.auth import get_email_from_auth_credentials, raise_exception_invalid_token

auth_handler = Auth()
security = HTTPBearer()
router = APIRouter(prefix=endpoints.API)


@router.get("/users/me", response_model=PublicUserSchema)
async def get_user_info(credentials: HTTPAuthorizationCredentials = Security(security)):
    try:
        email = get_email_from_auth_credentials(credentials)
        return get_user_by_email(email)
    except PyJWTError:
        raise_exception_invalid_token()
