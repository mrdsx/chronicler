from fastapi import APIRouter, HTTPException, Security, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from jwt import PyJWTError

import endpoints
from auth import Auth
from db.users.users_db import get_user_by_email
from schemas.users_schemas import PublicUserSchema

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
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token"
            )

        return get_user_by_email(email)
    except PyJWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token"
        )
