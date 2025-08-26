
# Collabtool: Real-Time Collaboration Tool

A MERN (MongoDB, Express.js, React.js, Node.js) stack application for real-time collaboration, featuring user authentication and a seamless user experience. This application allows multiple users to collaborate on documents, code, or other content in real-time.

---

## 🚀 Features

-   User authentication (Register/Login) using JWT.
-   Real-time collaboration functionality using WebSockets (Socket.IO).
-   Modern and intuitive UI with React.js.
-   Robust Backend API with Express.js and MongoDB.
-   Real-time document editing.
-   User presence indicators.
-   Role-based access control (future enhancement).

---

## 🛠️ Technologies Used

-   **Frontend**: React.js, React Router, Axios, Socket.IO-client
-   **Backend**: Node.js, Express.js, JWT, bcrypt, Socket.IO
-   **Database**: MongoDB (with Mongoose)
-   **Styling**: CSS (or a CSS framework like Material UI, Bootstrap, or Tailwind CSS)

---

## 📁 Project Structure

bash
    git clone https://github.com/mahesh-tambe07/Collabtool
    cd collabtool/backend
    
    PORT=5000
    MONGODB_URI=mongodb://localhost:27017/collabtool
    JWT_SECRET=your_jwt_secret_key
        The server will start at `http://localhost:5000` (or the port specified in your `.env` file).

### Frontend Setup

1.  Navigate to the `frontend` directory:

    
    REACT_APP_API_BASE_URL=http://localhost:5000
    1.  Navigate to the registration page.
2.  Fill in the registration form with your details (username, email, password).
3.  Click the "Register" button.
4.  You will be redirected to the login page after successful registration.

### Logging in

1.  Navigate to the login page.
2.  Enter your registered email and password.
3.  Click the "Login" button.
4.  You will be redirected to the main collaboration dashboard upon successful login.

### Real-time Document Editing

1.  Once logged in, create a new document or select an existing one.
2.  Begin typing in the editor.
3.  Other users viewing the same document will see your changes in real-time.
4.  You will also see changes made by other users.

### User Presence

1.  When a user joins a document, their presence is indicated by an online status indicator (e.g., a green dot next to their name).
2.  When a user leaves the document, their status changes to offline.

---

## 🗺️ Roadmap

-   [ ] Implement role-based access control.
-   [ ] Add support for multiple document types (code, text, whiteboard).
-   [ ] Integrate video conferencing.
-   [ ] Implement version history and rollback functionality.
-   [ ] Enhance user interface and user experience.
-   [ ] Improve error handling and logging.
-   [ ] Add more comprehensive documentation.

---

## 🤝 Contributing

We welcome contributions to Collabtool! To contribute:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with clear, concise messages.
4.  Submit a pull request.

> Please follow the existing code style and conventions.  Include tests for any new functionality.

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🧑‍💻 Author

