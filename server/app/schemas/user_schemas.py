from pydantic import BaseModel

class UserSchema(BaseModel):
    id: int
    username: str
    email: str
    hashed_password: str

    class Config:
        from_attributes=True
