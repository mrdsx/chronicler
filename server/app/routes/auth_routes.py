from fastapi import APIRouter

import endpoints
from auth import Auth
from schemas.auth_schemas import AuthSchema_SignUp, AuthSchema_Login, AuthSchema_Tokens
from services.users_services import create_user
from utils.auth import validate_login_data, validate_signup_data

auth_handler = Auth()
router = APIRouter(prefix=endpoints.AUTH)


@router.post("/register", response_model=AuthSchema_Tokens)
async def sign_up(signup_data: AuthSchema_SignUp):
    await validate_signup_data(signup_data)
    user = create_user(signup_data)

    access_token = auth_handler.encode_token(user["email"])
    refresh_token = auth_handler.encode_refresh_token(user["email"])

    return {"access_token": access_token, "refresh_token": refresh_token}


@router.post("/login", response_model=AuthSchema_Tokens)
async def login(login_data: AuthSchema_Login):
    await validate_login_data(login_data)

    access_token = auth_handler.encode_token(login_data.email)
    refresh_token = auth_handler.encode_refresh_token(login_data.email)

    return {"access_token": access_token, "refresh_token": refresh_token}
