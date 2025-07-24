from db.users import get_user_by_email
from schemas.auth_schemas import AuthSchema_Login, AuthSchema_SignUp
from utils.user import (
    validate_user_not_exists,
    validate_email_address,
    validate_password,
    validate_password_and_confirm_password,
    validate_username,
)
from .errors import raise_exception_wrong_login_data
from .validators import get_is_login_data_valid


def validate_login_data(login_data: AuthSchema_Login) -> None:
    db_user = get_user_by_email(login_data.email)
    if db_user is None:
        raise_exception_wrong_login_data()

    email = login_data.email
    password = login_data.password
    if not get_is_login_data_valid(email, password, db_user["hashed_password"]):
        raise_exception_wrong_login_data()


def validate_signup_data(signup_data: AuthSchema_SignUp) -> None:
    validate_username(signup_data.username)
    validate_email_address(signup_data.email)
    validate_user_not_exists(signup_data.username, signup_data.email)

    validate_password(signup_data.password)
    validate_password_and_confirm_password(
        signup_data.password, signup_data.confirm_password
    )
