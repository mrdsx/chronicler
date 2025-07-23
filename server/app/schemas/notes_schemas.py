from pydantic import BaseModel

from utils.models_utils import partial_model


class NoteSchema(BaseModel):
    title: str
    content: str


@partial_model
class PartialNoteSchema(NoteSchema):
    pass
