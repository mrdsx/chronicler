from pydantic import BaseModel

class UserSchema(BaseModel):
    username: str
    email: str
    hashed_password: str

class UserSchemaWithId(UserSchema):
    id: int

    class Config:
        from_attributes=True
