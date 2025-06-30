from email_validator import validate_email, EmailNotValidError

def get_is_email_valid(email):
    try:
        email_info = validate_email(email, check_deliverability=True)
        email = email_info.normalized
        return True, email
    except EmailNotValidError as e:
        return False, str(e)
