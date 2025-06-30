from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
import uvicorn

from routes.auth import router as auth_router

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

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
        "timestamp": str(datetime.now()) + "Z"
    }

app.include_router(auth_router)

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=3000)
