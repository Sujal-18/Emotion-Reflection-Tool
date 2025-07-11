from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI()

# Allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # frontend origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Reflection(BaseModel):
    text: str
@app.get("/")
def read_root():
    return {"message": "Emotion API is running"}

@app.post("/analyze")
async def analyze_emotion(reflection: Reflection):
    fake_emotions = ['Happy', 'Sad', 'Angry', 'Anxious', 'Excited']
    return {
        "emotion": random.choice(fake_emotions),
        "confidence": round(random.uniform(0.6, 0.95), 2)
    }
