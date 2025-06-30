from fastapi import APIRouter, HTTPException
from fastapi.security import HTTPBearer

from models import AuthModel_SignUp, AuthModel_Login
from auth import Auth
from services import create_user, validate_signup_data
from constants import routes

auth_handler = Auth()
security = HTTPBearer()
auth_router = APIRouter(prefix=routes.AUTH)

@auth_router.post("/signup")
async def signup(signup_data: AuthModel_SignUp):
    validate_signup_data(signup_data)
    user = create_user(signup_data)

    access_token = auth_handler.encode_token(user["email"])
    refresh_token = auth_handler.encode_refresh_token(user["email"])

    return {
        "access_token": access_token,
        "refresh_token": refresh_token
    }

@auth_router.post('/login')
async def login(user_details : AuthModel_Login):
    try:
        # TODO: implement a database to hold user email and hash password
        # user = users_db.get(user_details.email)
        # if user is None:
        #       return HTTPException(status_code=401, detail='Wrong email or password')
        hashed_password = auth_handler.encode_password(user_details.password)
        if user_details.email is None:
            return HTTPException(status_code=401, detail='Invalid email')
        if not auth_handler.verify_password(user_details.password, hashed_password):
            return HTTPException(status_code=401, detail='Invalid password')

        access_token = auth_handler.encode_token(user_details.email)
        refresh_token = auth_handler.encode_refresh_token(user_details.email)
        return {'access_token': access_token, 'refresh_token': refresh_token}
    except BaseException as e:
        print('Failed to do something: ' + str(e))
        error_msg = 'Failed to login user'
        return error_msg
