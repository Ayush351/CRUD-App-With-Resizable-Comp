# CRUD Resize Component

## Overview
This project is a full-stack web application built with React.js for the front end and Express.js for the back end. It provides resizable components on the front end and handles data operations via RESTful APIs on the back end. The application allows users to perform CRUD (Create, Read, Update, Delete) operations on data stored in a MongoDB database.


https://github.com/Ayush351/CRUD-App-With-Resizable-Comp/assets/41275743/1d8a9abd-d21b-43e1-9eb2-517c091ea851

### MongoDB Database Entry

![Screenshot 2024-04-04 222703](https://github.com/Ayush351/CRUD-App-With-Resizable-Comp/assets/41275743/95df1ade-a70c-4d9b-8d9b-0e2819a27be6)


## Features

- Resizable Components: The front end includes resizable components using react-resizable and react-resizable-panels libraries, providing a flexible and customizable user interface.
- API Operations: The back end provides RESTful APIs for performing CRUD operations on data stored in MongoDB. It supports POST and PUT requests for creating and updating data.
- Data Binding: The application utilizes data binding to display changes simultaneously, ensuring a seamless user experience.


## Technologies Used

### Front End

- React.js
- Axios
- React Bootstrap
- react-resizable
- react-resizable-panels

### Back End

- Express.js
- MongoDB
- Mongoose
- Body-parser
- Cors
- Dotenv

### Demo Link - https://crud-app-with-resizable-comp.vercel.app/
  
### Getting Started

Clone the repository.
Navigate to the project directory.

Install dependencies for both front end and back end:

cd frontend
npm install
cd ../backend
npm install

Set up environment variables:
Create a .env file in the backend directory.
Define environment variables such as PORT and MongoDB connection URI.

### Start the back end server:

- cd backend
- npm start

### Start the front end development server:

- cd frontend
- npm start

Access the application in your web browser at http://localhost:3000.
