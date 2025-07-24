import re

from email_validator import EmailNotValidError, validate_email
from .constants import USERNAME_REGEX, PASSWORD_REGEX


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


def get_is_password_valid(password: str) -> re.Match[str] | None:
    regex = re.compile(PASSWORD_REGEX)
    return regex.match(password)
