from pydantic import BaseModel, Field


class UserSchema(BaseModel):
    username: str
    email: str
    hashed_password: str


class UserSchemaWithId(UserSchema):
    id: int

    class Config:
        from_attributes = True


class PublicUserSchema(UserSchemaWithId):
    hashed_password: str = Field(exclude=True)
