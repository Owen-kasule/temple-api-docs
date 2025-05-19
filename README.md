# Temple API Documentation

## Overview
This project is a Node.js application that provides an API for managing temple resources. It allows users to create, read, update, and delete temple entries stored in a MongoDB database. The API is documented using Swagger, providing a user-friendly interface for testing and exploring the available endpoints.

## Project Structure
The project is organized as follows:

```
temple-api-docs
├── src
│   ├── controllers          # Contains the logic for handling requests
│   ├── models               # Defines the data structure for temples
│   ├── routes               # Contains route definitions for the API
│   ├── config               # Configuration files for the application
│   ├── middleware           # Middleware functions for request validation
│   ├── swagger              # Swagger documentation setup and output
│   └── app.js               # Main entry point of the application
├── data                     # Sample data for the temples collection
├── .env                     # Environment variables for configuration
├── .gitignore               # Files and directories to ignore in Git
├── package.json             # Project metadata and dependencies
└── package-lock.json        # Locked versions of npm packages
```

## Setup Instructions

1. **Clone the Repository**
   Clone this repository to your local machine using:
   ```
   git clone <repository-url>
   ```

2. **Install Dependencies**
   Navigate to the project directory and install the required npm packages:
   ```
   cd temple-api-docs
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add your MongoDB connection string and any other necessary environment variables. Example:
   ```
   MONGODB_URI=mongodb://localhost:27017/temple-api
   ```

4. **Import Sample Data**
   Import the `temples.json` file into your MongoDB collection named `temples` using a MongoDB client or command line.

5. **Run the Application**
   Start the application by running:
   ```
   npm start
   ```

6. **Access Swagger Documentation**
   Open your browser and navigate to `http://localhost:3000/api-docs` to view the Swagger UI, where you can explore and test the API endpoints.

## API Endpoints
The API provides the following endpoints for managing temple resources:

- **GET /temples**: Retrieve a list of all temples.
- **GET /temples/:id**: Retrieve a specific temple by ID.
- **POST /temples**: Create a new temple entry.
- **PUT /temples/:id**: Update an existing temple entry by ID.
- **DELETE /temples/:id**: Delete a temple entry by ID.

## Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.