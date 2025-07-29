from auth import Auth
from db.users import save_user
from schemas.auth_schemas import AuthSchema_SignUp
from schemas.users_schemas import UserSchema

auth_handler = Auth()


async def create_user(signup_data: AuthSchema_SignUp) -> UserSchema:
    hashed_password = auth_handler.encode_password(signup_data.password)
    user_data = {
        "username": signup_data.username,
        "email": signup_data.email,
        "hashed_password": hashed_password,
    }
    new_user = await save_user(user_data)
    return new_user
