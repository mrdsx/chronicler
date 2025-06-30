import re
from pydantic import BaseModel, field_validator

class AuthModel_SignUp(BaseModel):
    username: str
    email: str
    password: str
    confirm_password: str

class AuthModel_Login(BaseModel):
    email: str
    password: str
    @field_validator('password')
    def passwords_validation(cls, v):
        if not custom_password_validator(v):
            raise ValueError("Password must have minimum 8 characters to maximum 20 characters, 1 capital letter, 1 small letter, and 1 special character from '!@#$%^&*()'")
        return v

def custom_password_validator(password):
    reg = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$"
    pat = re.compile(reg)
    mat = re.search(pat, password)
    return mat
