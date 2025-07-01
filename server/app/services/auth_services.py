from fastapi import HTTPException

from schemas.auth_schemas import AuthSchema_SignUp
from utils.auth_utils import validate_email_address, validate_password_length, validate_user_not_exists
from auth import Auth

auth_handler = Auth()

# TODO: add password symbols validation (lower- and uppercase letters, numbers, special characters)
def validate_signup_data(signup_data: AuthSchema_SignUp):
    if len(signup_data.username) < 3:
        raise HTTPException(status_code=409, detail="Username must be at least 3 characters long")
    
    validate_email_address(signup_data.email)
    validate_user_not_exists(signup_data.username, signup_data.email)
    validate_password_length(signup_data.password)

    if signup_data.password != signup_data.confirm_password:
        raise HTTPException(status_code=400, detail="New password and confirm password does not match")
