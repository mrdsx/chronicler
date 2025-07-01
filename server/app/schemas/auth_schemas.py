from pydantic import BaseModel

class AuthSchema_SignUp(BaseModel):
    username: str
    email: str
    password: str
    confirm_password: str

class AuthSchema_Login(BaseModel):
    email: str
    password: str