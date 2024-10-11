# Employee Upload MERN Application

This is a MERN stack application that allows users to upload employee details along with an avatar image. The application uses Cloudinary for image storage and MongoDB for data persistence.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Backend API Endpoints](#backend-api-endpoints)
- [Testing the API with Postman](#testing-the-api-with-postman)
- [Production Considerations](#production-considerations)
- [License](#license)

## Features

- User can upload employee details including username, name, age, designation, and avatar image.
- Images are stored in Cloudinary.
- Data is persisted in MongoDB.
- Input validation and error handling are implemented.
- Secure and optimized for production use.

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **File Storage**: Cloudinary
- **Middleware**: Multer, CORS, 

## Setup Instructions

### Prerequisites

1. **Node.js**: Ensure you have Node.js installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).
2. **MongoDB**: Set up a MongoDB database. You can use a local instance or a cloud service like MongoDB Atlas.
3. **Cloudinary Account**: Create an account on [Cloudinary](https://cloudinary.com/) to manage image uploads.

### Clone the Repository

```bash
git clone https://github.com/yourusername/employee-upload.git
cd employee-upload