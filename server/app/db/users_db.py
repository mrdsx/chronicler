from typing import Optional
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from models.users_models import DB_User_Model, Base
from schemas.user_schemas import UserSchema

DATABASE_URL = "sqlite:///app/db/users.db"
engine = create_engine(DATABASE_URL)

Base.metadata.create_all(engine)

Session = sessionmaker(engine)
session = Session()

def save_user(user: DB_User_Model) -> None:
    new_user = DB_User_Model(username=user["username"],
                             email=user["email"],
                             hashed_password=user["hashed_password"])
    session.add(new_user)
    session.commit()


def get_user_by_username(username: str) -> Optional[UserSchema]:
    try:
        db_user = session.query(DB_User_Model).filter(DB_User_Model.username == username).first()
        return UserSchema.model_validate(db_user).model_dump()
    except BaseException:
        return None


def get_user_by_email(email: str) -> Optional[UserSchema]:
    try:
        db_user = session.query(DB_User_Model).filter(DB_User_Model.email == email).first()
        return UserSchema.model_validate(db_user).model_dump()
    except BaseException:
        return None
