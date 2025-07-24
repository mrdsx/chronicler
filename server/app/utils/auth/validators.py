from auth import Auth

auth_handler = Auth()


def get_is_login_data_valid(
    email: str | None, input_password: str, db_password: str
) -> bool:
    if email is None:
        return False
    if not auth_handler.verify_password(input_password, db_password):
        return False
    return True
