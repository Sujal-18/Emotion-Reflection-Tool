# Simple Emotion Reflection Tool

A mobile-first full-stack web application that allows users to input a short text reflection and receive a mock emotional analysis response.

Built with:
- 🌐 React + TypeScript (Frontend)
- ⚙️ FastAPI (Backend)
- 🎨 Dark/Light Theme Toggle
- ⌨️ Typewriter Effect for Displaying Results
- ✍️ Auto-resizing Textarea
- ✅ Keyboard Shortcut: `Enter` to submit, `Shift+Enter` for newline

---

## ✨ Features

- Responsive & clean UI
- Emotion result with typewriter animation
- Toggle between light and dark mode
- Auto-growing textarea
- Fast API integration with fake emotion analysis
- Handles errors and loading states gracefully


## 🧩 Tech Stack

| Frontend         | Backend         |
|------------------|-----------------|
| React + TypeScript | FastAPI (Python) |
| Axios (for API calls) | CORS middleware |
| react-simple-typewriter | JSON responses |
| react-textarea-autosize | Uvicorn server |

---

## 🚀 Getting Started

### Clone the repo

```bash
git clone [https://github.com/Sujal-18/Emotion-Reflection-Tool.git]
```
### Setup
```bash
cd emotion-reflection-tool
npm install axios  
```
## Frontend Setup
```bash
npm install
```
## To start the frontend server
```bash
npm start
```

## Backend Setup
```bash
pip install fastapi uvicorn
```
## To run the server
```bash
uvicorn main:app --reload --port 8000
```
