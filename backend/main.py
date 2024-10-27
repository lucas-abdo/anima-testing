from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello, FastAPI!"}

@app.get("/greet/")
async def greet_user(username: str):
    return {"message": f"Hello, {username}"}