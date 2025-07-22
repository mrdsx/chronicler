from fastapi import APIRouter, HTTPException, Security
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from jwt import PyJWTError
from typing import Optional

from app import routes
from auth import Auth
from db.users_db import get_user_by_email
from schemas.user_schemas import UserSchemaWithId

auth_handler = Auth()
security = HTTPBearer()
router = APIRouter(prefix=routes.API)


@router.get("/users/me")
async def get_user_info(
    credentials: HTTPAuthorizationCredentials = Security(security),
) -> Optional[UserSchemaWithId]:
    try:
        token = credentials.credentials
        payload = auth_handler.decode_token(token)
        email = payload["sub"]
        if email is None:
            raise HTTPException(status_code=401, detail="Invalid token")

        user = get_user_by_email(email)
        return user
    except PyJWTError:
        raise HTTPException(status_code=401, detail="Invalid token")
