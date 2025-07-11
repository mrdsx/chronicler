from pydantic import BaseModel
from typing import TypedDict

class AuthSchema_Tokens(TypedDict):
    access_token: str
    refresh_token: str


class AuthSchema_SignUp(BaseModel):
    username: str
    email: str
    password: str
    confirm_password: str


class AuthSchema_Login(BaseModel):
    email: str
    password: str
