from fastapi import HTTPException

from models.user import AuthModel_SignUp
from db.user_repo import get_user_by_email, get_user_by_username, save_user
from auth import Auth

auth_handler = Auth()

def validate_signup_data(signup_data: AuthModel_SignUp):
    if get_user_by_username(signup_data.username):
        raise HTTPException(status_code=409, detail="Username is already taken")

    if get_user_by_email(signup_data.email):
        raise HTTPException(status_code=409, detail="Email is already taken")

    if len(signup_data.password) < 8:
        raise HTTPException(status_code=400, detail="Password is too short")

    # add more rules here

def create_user(signup_data: AuthModel_SignUp):
    hashed_password = auth_handler.encode_password(signup_data.password)
    new_user = {
        "username": signup_data.username,
        "email": signup_data.email,
        "hashed_password": hashed_password,
    }
    save_user(new_user)
    return new_user