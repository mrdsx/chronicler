from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from models.users_models import DB_User_Model, Base
from schemas.users_schemas import UserSchema

DATABASE_URL = "sqlite:///app/db/users/users.db"
engine = create_engine(DATABASE_URL)

Base.metadata.create_all(engine)

Session = sessionmaker(engine)
session = Session()


async def save_user(user: DB_User_Model) -> UserSchema:
    new_user = DB_User_Model(
        username=user["username"],
        email=user["email"],
        hashed_password=user["hashed_password"],
    )
    session.add(new_user)
    session.commit()

    return get_user_by_email(user["email"])


async def get_user_by_username(username: str) -> DB_User_Model | None:
    try:
        db_user = (
            session.query(DB_User_Model)
            .filter(DB_User_Model.username == username)
            .first()
        )
        return db_user
    except BaseException:
        return None


async def get_user_by_email(email: str) -> DB_User_Model | None:
    try:
        db_user = (
            session.query(DB_User_Model).filter(DB_User_Model.email == email).first()
        )
        return db_user
    except BaseException:
        return None
