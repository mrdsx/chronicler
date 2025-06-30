from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import declarative_base
from sqlalchemy.orm import sessionmaker

engine = create_engine('sqlite:///app/db/users.db')

Base = declarative_base()

class DB_User_Model(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    username = Column(String, unique=True, nullable=False)
    email = Column(String, unique=True, nullable=False)
    hashed_password = Column(String, nullable=False)

Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

def save_user(user: DB_User_Model):
    new_user = DB_User_Model(username=user["username"],
                             email=user["email"],
                             hashed_password=user["hashed_password"])
    session.add(new_user)
    session.commit()

def get_user_by_username(username: str):
    return session.query(DB_User_Model).filter(DB_User_Model.username == username).first()

def get_user_by_email(email: str):
    return session.query(DB_User_Model).filter(DB_User_Model.email == email).first()
