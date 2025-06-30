from fastapi import HTTPException
from utils import get_is_email_valid
from db import get_user_by_username, get_user_by_email

def validate_email_address(email: str):
    is_email_valid, _msg = get_is_email_valid(email)
    if not is_email_valid:
        raise HTTPException(status_code=409, detail="Invalid email")

def validate_user_not_exists(username: str, email: str):
    if get_user_by_username(username):
        raise HTTPException(status_code=409, detail="Username is already taken")

    if get_user_by_email(email):
        raise HTTPException(status_code=409, detail="Email is already associated with account")

def validate_password_length(password: str):
    if len(password) < 8:
        raise HTTPException(status_code=400, detail="Password is too short")
    
    if len(password) > 128:
        raise HTTPException(status_code=400, detail="Password is too long")