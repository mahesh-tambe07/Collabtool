# Real-Time Collaboration Tool

This project is a real-time collaboration tool built using the MERN stack (MongoDB, Express, React, Node.js). It allows multiple users to collaborate in real-time on shared documents.

## Server Setup

1. **Install Dependencies**: Navigate to the `server` directory and run:
   ```
   npm install
   ```

2. **Environment Variables**: Create a `.env` file in the `server` directory to store your environment variables, such as database connection strings.

3. **Start the Server**: Run the following command to start the server:
   ```
   npm start
   ```

## API Endpoints

- **GET /api/documents**: Retrieve all documents.
- **POST /api/documents**: Create a new document.
- **PUT /api/documents/:id**: Update an existing document.
- **DELETE /api/documents/:id**: Delete a document.

## Database

This application uses MongoDB for data storage. Ensure that your MongoDB server is running and accessible.

## Client Setup

1. **Install Dependencies**: Navigate to the `client` directory and run:
   ```
   npm install
   ```

2. **Start the Client**: Run the following command to start the client application:
   ```
   npm start
   ```

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or features.

## License

This project is licensed under the MIT License.