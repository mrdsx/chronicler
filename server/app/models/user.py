from pydantic import BaseModel

class AuthModel_SignUp(BaseModel):
    username: str
    email: str
    password: str
    confirm_password: str

class AuthModel_Login(BaseModel):
    email: str
    password: str
