from auth import Auth
from .constants import PASSWORD_REGEX, USERNAME_REGEX
from email_validator import validate_email, EmailNotValidError
import re

auth_handler = Auth()


def get_is_username_valid(username: str) -> re.Match[str] | None:
    regex = re.compile(USERNAME_REGEX)
    return regex.match(username)


def get_is_email_valid(email: str) -> bool:
    try:
        email_info = validate_email(email, check_deliverability=True)
        email = email_info.normalized
        return True
    except EmailNotValidError:
        return False


def get_is_login_data_valid(
    email: str | None, input_password: str, db_password: str
) -> bool:
    if email is None:
        return False
    if not auth_handler.verify_password(input_password, db_password):
        return False
    return True


def get_is_password_valid(password: str) -> re.Match[str] | None:
    regex = re.compile(PASSWORD_REGEX)
    return regex.match(password)
