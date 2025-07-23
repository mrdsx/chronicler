from fastapi import APIRouter, HTTPException, Security, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from jwt import PyJWTError

import endpoints
from auth import Auth
from db.users.users_db import get_user_by_email
from schemas.users_schemas import PublicUserSchema
from utils.errors import raise_exception_invalid_token

auth_handler = Auth()
security = HTTPBearer()
router = APIRouter(prefix=endpoints.API)


@router.get("/users/me", response_model=PublicUserSchema)
async def get_user_info(credentials: HTTPAuthorizationCredentials = Security(security)):
    try:
        token = credentials.credentials
        payload = auth_handler.decode_token(token)
        email = payload["sub"]
        if email is None:
            raise_exception_invalid_token()

        return get_user_by_email(email)
    except PyJWTError:
        raise_exception_invalid_token()
