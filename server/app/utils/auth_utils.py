from fastapi import HTTPException

from db.users_db import get_user_by_username, get_user_by_email
from schemas.auth_schemas import AuthSchema_Login, AuthSchema_SignUp
from utils.validation_utils import get_is_email_valid, get_is_login_data_valid


def validate_login_data(login_data: AuthSchema_Login) -> None:
    db_user = get_user_by_email(login_data.email)
    if db_user is None:
        raise HTTPException(status_code=401, detail="Wrong email or password")

    email = login_data.email
    password = login_data.password
    if not get_is_login_data_valid(email, password, db_user["hashed_password"]):
        raise HTTPException(status_code=401, detail="Wrong email or password")


# TODO: add password symbols validation (lower- and uppercase letters, numbers, special characters)
def validate_signup_data(signup_data: AuthSchema_SignUp) -> None:
    validate_username(signup_data.username)
    validate_email_address(signup_data.email)
    validate_user_not_exists(signup_data.username, signup_data.email)

    validate_password_length(signup_data.password)
    validate_password_and_confirm_password(
        signup_data.password, signup_data.confirm_password
    )


def validate_username(username: str) -> None:
    if len(username) < 3:
        raise HTTPException(
            status_code=422, detail="Username must be at least 3 characters long"
        )


def validate_email_address(email: str) -> None:
    is_email_valid, msg = get_is_email_valid(email)
    if not is_email_valid:
        raise HTTPException(status_code=422, detail="Invalid email")


def validate_user_not_exists(username: str, email: str) -> None:
    if get_user_by_username(username):
        raise HTTPException(status_code=409, detail="Username is already taken")

    if get_user_by_email(email):
        raise HTTPException(
            status_code=409, detail="Email is already associated with account"
        )


def validate_password_length(password: str) -> None:
    if len(password) < 8:
        raise HTTPException(status_code=422, detail="Password is too short")


def validate_password_and_confirm_password(
    password: str, confirm_password: str
) -> None:
    if password != confirm_password:
        raise HTTPException(
            status_code=422, detail="New password and confirm password does not match"
        )
