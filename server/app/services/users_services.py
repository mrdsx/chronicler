from schemas.auth_schemas import AuthSchema_SignUp
from db.users_db import save_user
from auth import Auth

auth_handler = Auth()

def create_user(signup_data: AuthSchema_SignUp):
    hashed_password = auth_handler.encode_password(signup_data.password)
    new_user = {
        "username": signup_data.username,
        "email": signup_data.email,
        "hashed_password": hashed_password,
    }
    save_user(new_user)
    return new_user