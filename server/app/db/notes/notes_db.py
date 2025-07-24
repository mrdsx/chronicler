from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from models.notes_models import DB_Note_Model, Base

DATABASE_URL = "sqlite:///app/db/notes/notes.db"
engine = create_engine(DATABASE_URL)

Base.metadata.create_all(engine)

Session = sessionmaker(engine)
session = Session()


def get_notes_by_user_id(user_id: int) -> list[DB_Note_Model]:
    try:
        db_notes = session.query(DB_Note_Model).filter(DB_Note_Model.user_id == user_id)
        return db_notes
    except BaseException:
        return None


def save_note(note: DB_Note_Model, user_id: int) -> DB_Note_Model:
    new_note = DB_Note_Model(user_id=user_id, title=note.title, content=note.content)
    session.add(new_note)
    session.commit()

    return new_note
