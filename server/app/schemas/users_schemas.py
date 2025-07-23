from pydantic import BaseModel, Field


class UserSchemaWithId(BaseModel):
    id: int
    username: str
    email: str
    hashed_password: str

    class Config:
        from_attributes = True


class PublicUserSchema(UserSchemaWithId):
    hashed_password: str = Field(exclude=True)
