from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_greet_user_success():
    response = client.get("/greet/", params={"username": "Lucas"})
    assert response.status_code == 200
    assert response.json() == {"message": "Hello, Lucas!"}

def test_greet_user_error():
    response = client.get("/greet/")
    assert response.status_code == 422
