## Setup

## Prerequisites

Before you begin, ensure you have the following installed:
- Python 3 or higher
- React
- Flask 
- npm (Node Package Manager)

## Getting Started

Follow these steps to get the application running on your local machine:

### Starting the Backend

1. Open your terminal.
2. Navigate to the flask-app directory (backend).
3. create virtual environment
<<<<<<< HEAD
=======
   (Windows)
   ```
   python -m venv venv
   ```
   (Mac)
>>>>>>> 15d6514f942bbc10dcf2289f598924b474597deb
   ```
   python -m venv venv
   ```
  
4. make sure to activate virtual environment
   ```
   (Windows)
   ```
   venv\Scripts\activate
   ```
   (Mac)   
   ```
   source venv/bin/activate
   ```
5. install Flask App requirements
   (Windows)
   ```
   pip install -r requirements.txt
   ```
   (Mac)
   ```
   pip3 install -r requirements.txt
   ```
6. now run
   (Windows)
   ```
   python app.py
   ```
   (Mac)
   ```
   python3 app.py
   ```
   
   backend would be running on `http://localhost:5000`
   


### Starting the React frontend

1. Open your terminal
2. Make sure to navigate into the root directory of the frontend as follows:
```
cd learn-local/frontend
```
3. Install App requirements:
   ```
   npm install
   ```

4. Run the frontend on a local server using the following:
```
npm start
```
5. frontend should be running on `http://localhost:3000`
