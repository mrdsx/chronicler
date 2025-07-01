from fastapi import APIRouter, HTTPException, Security
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer

from utils.validation_utils import get_is_login_data_valid
from db.users_db import get_user_by_email
from models.user import AuthModel_SignUp, AuthModel_Login
from services.auth_services import create_user, validate_signup_data
from constants import routes
from auth import Auth

auth_handler = Auth()
security = HTTPBearer()
router = APIRouter(prefix=routes.AUTH)

@router.post("/signup")
async def signup(signup_data: AuthModel_SignUp):
    validate_signup_data(signup_data)
    user = create_user(signup_data)

    access_token = auth_handler.encode_token(user["email"])
    refresh_token = auth_handler.encode_refresh_token(user["email"])

    return {
        "access_token": access_token,
        "refresh_token": refresh_token
    }

@router.post("/login")
async def login(user_details : AuthModel_Login):
    try:
        db_user = get_user_by_email(user_details.email)
        if db_user is None:
            return HTTPException(status_code=401, detail="Wrong email or password")
        
        email = user_details.email
        password = user_details.password
        if not get_is_login_data_valid(email, password, db_user["hashed_password"]):
            return HTTPException(status_code=401, detail="Wrong email or password")
        
        access_token = auth_handler.encode_token(user_details.email)
        refresh_token = auth_handler.encode_refresh_token(user_details.email)
        return {"access_token": access_token, "refresh_token": refresh_token}
    except BaseException as e:
        print("Failed to do something: " + str(e))
        error_msg = "Failed to login"
        return HTTPException(status_code=400, detail=error_msg)

@router.get("/secret")
async def secret_data(credentials: HTTPAuthorizationCredentials = Security(security)):
    token = credentials.credentials
    return auth_handler.decode_token(token)
