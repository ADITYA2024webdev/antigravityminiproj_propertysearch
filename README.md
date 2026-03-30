# Property Search App

A full-stack real estate property search web application, modeled after MagicBricks, specifically designed for finding properties in Bangalore and Mumbai.

## Features

*   **Search Interface:** Filter properties by City (Bangalore/Mumbai), Listing Type (Buy/Rent), Property Type (Flat/House), and Budget.
*   **Property Listings:** View detailed property cards with images, prices, locations, and specifications.
*   **Responsive Design:** Modern and dynamic user interface built with React.
*   **Robust Backend:** Fast and efficient API built with FastAPI and Python.
*   **Local Database:** Uses SQLite to store mock property listings.

## Tech Stack

*   **Frontend:** React, Vite, Vanilla CSS
*   **Backend:** Python, FastAPI, Uvicorn
*   **Database:** SQLite

## Getting Started

### Prerequisites

*   Node.js and npm
*   Python 3.x
*   `uv` (fast Python package installer - optional but recommended)

### Backend Setup

1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```
2.  Create a virtual environment (if not already created):
    ```bash
    python -m venv venv
    ```
3.  Activate the virtual environment:
    *   **macOS/Linux:** `source venv/bin/activate`
    *   **Windows:** `venv\Scripts\activate`
4.  Install dependencies:
    ```bash
    pip install fastapi 'uvicorn[standard]' sqlalchemy pydantic
    ```
5.  Run the backend server:
    ```bash
    uvicorn main:app --reload --port 8000
    ```

### Frontend Setup

1.  Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```

The frontend will be accessible at `http://localhost:5173` (or similar, check terminal output).

## Project Structure

*   `backend/`: Contains the FastAPI application, database models, and API routes.
*   `frontend/`: Contains the React application, components, and styling.
