from fastapi import HTTPException

from schemas.auth_schemas import AuthSchema_Login, AuthSchema_SignUp
from db.users_db import get_user_by_email
from utils.auth_utils import validate_email_address, validate_password_length, validate_user_not_exists
from utils.validation_utils import get_is_login_data_valid
from auth import Auth

auth_handler = Auth()

def validate_login_data(login_data: AuthSchema_Login):
    db_user = get_user_by_email(login_data.email)
    if db_user is None:
        raise HTTPException(status_code=401, detail="Wrong email or password")
    
    email = login_data.email
    password = login_data.password
    if not get_is_login_data_valid(email, password, db_user["hashed_password"]):
        raise HTTPException(status_code=401, detail="Wrong email or password")

# TODO: add password symbols validation (lower- and uppercase letters, numbers, special characters)
def validate_signup_data(signup_data: AuthSchema_SignUp):
    if len(signup_data.username) < 3:
        raise HTTPException(status_code=409, detail="Username must be at least 3 characters long")
    
    validate_email_address(signup_data.email)
    validate_user_not_exists(signup_data.username, signup_data.email)
    validate_password_length(signup_data.password)

    if signup_data.password != signup_data.confirm_password:
        raise HTTPException(status_code=400, detail="New password and confirm password does not match")
