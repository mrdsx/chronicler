from pydantic import BaseModel, Field


class UserSchema(BaseModel):
    id: int
    username: str
    email: str
    hashed_password: str

    class Config:
        from_attributes = True


class PublicUserSchema(UserSchema):
    hashed_password: str = Field(exclude=True)
