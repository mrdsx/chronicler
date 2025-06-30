from fastapi import HTTPException

from models import AuthModel_SignUp
from db import save_user
from utils import validate_password_length, validate_user_not_exists
from auth import Auth

auth_handler = Auth()

def validate_signup_data(signup_data: AuthModel_SignUp):
    if len(signup_data.username) < 3:
        raise HTTPException(status_code=409, detail="Username must be at least 3 characters long")

    validate_user_not_exists(signup_data.username, signup_data.email)
    validate_password_length(signup_data.password)

    if signup_data.password != signup_data.confirm_password:
        raise HTTPException(status_code=400, detail="New password and confirm password does not match")

def create_user(signup_data: AuthModel_SignUp):
    hashed_password = auth_handler.encode_password(signup_data.password)
    new_user = {
        "username": signup_data.username,
        "email": signup_data.email,
        "hashed_password": hashed_password,
    }
    save_user(new_user)
    return new_user