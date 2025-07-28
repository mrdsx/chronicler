from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
import uvicorn

from routes.auth_routes import router as auth_router
from routes.users_routes import router as users_router
from routes.notes_routes import router as notes_router

app = FastAPI()

origins = ["http://localhost", "http://localhost:3000", "localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "api": "Chronicler Backend",
        "status": "running",
        "timestamp": str(datetime.now()) + "Z",
    }


app.include_router(auth_router)
app.include_router(users_router)
app.include_router(notes_router)

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=3000)
