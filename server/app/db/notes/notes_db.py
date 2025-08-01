from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from models.notes_models import DB_Note_Model, Base
from schemas.notes_schemas import Input_PartialNoteSchema

DATABASE_URL = "sqlite:///app/db/notes/notes.db"
engine = create_engine(DATABASE_URL)

Base.metadata.create_all(engine)

Session = sessionmaker(engine)
session = Session()


async def delete_note_by_id(note_id: int) -> None:
    db_note = session.query(DB_Note_Model).filter(DB_Note_Model.id == note_id).first()
    session.delete(db_note)
    session.commit()


async def get_note_by_id(note_id: int) -> DB_Note_Model | None:
    try:
        db_note = (
            session.query(DB_Note_Model).filter(DB_Note_Model.id == note_id).first()
        )
        return db_note
    except BaseException:
        return None


async def get_notes_by_user_id(user_id: int) -> list[DB_Note_Model]:
    try:
        db_notes = session.query(DB_Note_Model).filter(DB_Note_Model.user_id == user_id)
        return db_notes
    except BaseException:
        return None


async def save_note(note: DB_Note_Model, user_id: int) -> DB_Note_Model:
    new_note = DB_Note_Model(user_id=user_id, title=note.title, content=note.content)
    session.add(new_note)
    session.commit()

    return new_note


async def update_note_by_id(
    note_id: int, note: Input_PartialNoteSchema
) -> DB_Note_Model:
    db_note = session.query(DB_Note_Model).filter(DB_Note_Model.id == note_id).first()
    for key, value in note.model_dump().items():
        if value is not None:
            setattr(db_note, key, value)

    return db_note
