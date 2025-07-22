from pydantic import BaseModel, Field

from utils.models_utils import partial_model


class NoteSchema(BaseModel):
    title: str = Field(description="Untitled")
    content: str


@partial_model
class PartialNoteSchema(NoteSchema):
    pass
