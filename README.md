To run the To-Do List application locally, you need to follow these steps:

### Backend Setup

1. **Navigate to the Backend Directory:**
   Open your terminal or command prompt and navigate to the `backend` directory.
   ```sh
   cd path/to/todo-app/backend
   ```

2. **Install Backend Dependencies:**
   Install the required Node.js packages.
   ```sh
   npm install
   ```

3. **Start the Backend Server:**
   Start the Express server on port 5000.
   ```sh
   node server.js
   ```

   You should see a message indicating that the server is running:
   ```sh
   Server is running on http://localhost:5000
   ```

### Frontend Setup

1. **Navigate to the Frontend Directory:**
   Open a new terminal or command prompt window and navigate to the `todo-app` directory.
   ```sh
   cd path/to/todo-app
   ```

2. **Install Frontend Dependencies:**
   Install the required React packages.
   ```sh
   npm install
   ```

3. **Start the React Development Server:**
   Start the React development server on port 3000.
   ```sh
   npm start
   ```

   The default web browser should open automatically, and you should see the application running at:
   ```sh
   http://localhost:3000
   ```

### Full Steps

Here is a consolidated version of the steps to ensure clarity:

1. **Backend Setup:**
   - Open a terminal or command prompt.
   - Navigate to the backend directory:
     ```sh
     cd path/to/todo-app/backend
     ```
   - Install dependencies:
     ```sh
     npm install
     ```
   - Start the server:
     ```sh
     node server.js
     ```

2. **Frontend Setup:**
   - Open a new terminal or command prompt.
   - Navigate to the frontend directory:
     ```sh
     cd path/to/todo-app
     ```
   - Install dependencies:
     ```sh
     npm install
     ```
   - Start the React development server:
     ```sh
     npm start
     ```

### Important Notes

- **Ensure Ports Are Free:**
  Make sure that ports 3000 and 5000 are not being used by other applications.

- **Check for Errors:**
  If you encounter any errors during these steps, check the terminal output for error messages and resolve them accordingly.

- **Backend URL in Frontend:**
  The frontend is configured to send requests to `http://localhost:5000/api`. Ensure this base URL is correct in `axiosConfig.js`.

**axiosConfig.js**
```jsx
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export default axiosInstance;
```

By following these instructions, you should be able to run the To-Do List application locally and see it in action.