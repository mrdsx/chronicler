from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from models.notes_models import DB_Note_Model, Base
from schemas.notes_schemas import NoteSchema

DATABASE_URL = "sqlite:///app/db/notes/notes.db"
engine = create_engine(DATABASE_URL)

Base.metadata.create_all(engine)

Session = sessionmaker(engine)
session = Session()


def save_note(note: DB_Note_Model) -> NoteSchema:
    pass
    # new_note = DB_Note_Model()
    # session.add(new_note)
    # session.commit()
