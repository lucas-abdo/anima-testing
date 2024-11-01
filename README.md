# Anima Testing Example

This project demonstrates a simple web application with a React + TypeScript frontend and a FastAPI backend to show to Anima students.

## Technologies
- Frontend: React, TypeScript
- Backend: FastAPI, Python
- Testing: React Testing Library, Pytest, GitHub Actions for CI

## Setup
### Backend Setup (FastAPI)
1. Navigate to the Backend Directory:
```bash
cd anima-testing/backend
```

2. Create a Virtual Environment:
```bash
python -m venv venv
```

3. Activate the Virtual Environment (Windows):
```bash
venv\Scripts\activate
```

4. Install Dependencies:
```bash
pip install -r requirements.txt
```

5. Run the Backend:
```bash
uvicorn main:app --reload
```

The FastAPI server will be available at http://localhost:8000.

### Frontend Setup (React + TypeScript)
1. Navigate to the Frontend Directory:
```bash
cd anima-testing/frontend
```

2. Install Dependencies:
```bash
npm install
```

3. Run the frontend:
```bash
npm start
```

The React app will be available at http://localhost:3000.

## Testing
### Backend Tests
1. Activate the Virtual Environment (Windows):
```bash
venv\Scripts\activate
```

2. Navigate to Backend Directory:
```bash
cd anima-testing/backend
```

3. Run Tests:
```bash
pytest
```

### Frontend Tests
1. Navigate to Frontend Directory:
```bash
cd anima-testing/frontend
```

2. Run Tests:
```bash
npm test
```
