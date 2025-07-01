from pydantic import BaseModel

# TODO: move auth models to schemas and place db_user_model here
class AuthModel_SignUp(BaseModel):
    username: str
    email: str
    password: str
    confirm_password: str

class AuthModel_Login(BaseModel):
    email: str
    password: str

class UserSchema(BaseModel):
    id: int
    username: str
    email: str
    hashed_password: str

    class Config:
        orm_mode = True
        from_attributes=True