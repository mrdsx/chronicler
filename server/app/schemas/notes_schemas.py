from pydantic import BaseModel

from utils.models_utils import partial_model


class Input_NoteSchema(BaseModel):
    title: str
    content: str


class NoteSchema(BaseModel):
    id: int
    user_id: int
    title: str
    content: str


@partial_model
class PartialNoteSchema(NoteSchema):
    pass
