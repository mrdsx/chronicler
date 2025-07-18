from auth import Auth
from email_validator import validate_email, EmailNotValidError

auth_handler = Auth()


def get_is_email_valid(email: str) -> tuple[bool, str]:
    try:
        email_info = validate_email(email, check_deliverability=True)
        email = email_info.normalized
        return True, email
    except EmailNotValidError as e:
        return False, str(e)


def get_is_login_data_valid(email: str, input_password: str, db_password: str) -> bool:
    if email is None:
        return False
    if not auth_handler.verify_password(input_password, db_password):
        return False
    return True
