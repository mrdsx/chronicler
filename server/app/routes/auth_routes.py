from fastapi import APIRouter
from fastapi.security import HTTPBearer

from schemas.auth_schemas import AuthSchema_SignUp, AuthSchema_Login, AuthSchema_Tokens
from services.auth_services import validate_login_data, validate_signup_data
from services.users_services import create_user
from constants import routes
from auth import Auth

auth_handler = Auth()
security = HTTPBearer()
router = APIRouter(prefix=routes.AUTH)

@router.post("/register")
async def signup(signup_data: AuthSchema_SignUp) -> AuthSchema_Tokens:
    validate_signup_data(signup_data)
    user = create_user(signup_data)

    access_token = auth_handler.encode_token(user["email"])
    refresh_token = auth_handler.encode_refresh_token(user["email"])

    return {
        "access_token": access_token,
        "refresh_token": refresh_token
    }

@router.post("/login")
async def login(login_data : AuthSchema_Login) -> AuthSchema_Tokens:
    validate_login_data(login_data)
    
    access_token = auth_handler.encode_token(login_data.email)
    refresh_token = auth_handler.encode_refresh_token(login_data.email)
    return {
        "access_token": access_token,
        "refresh_token": refresh_token
    }
