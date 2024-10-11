# Employee Upload MERN Application

This is a MERN stack application that allows users to upload employee details along with an avatar image. The application uses Cloudinary for image storage and MongoDB for data persistence.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Backend API Endpoints](#backend-api-endpoints)
- [Testing the API with Postman](#testing-the-api-with-postman)
- [Frontend Functionality](#frontend-functionality)
- [Production Considerations](#production-considerations)
- [License](#license)

## Features

- User can upload employee details including username, name, age, designation, and avatar image.
- Images are stored in Cloudinary.
- Data is persisted in MongoDB.
- Responsive UI using Tailwind CSS.
- Loading spinner displayed while uploading data.
- Toast notifications for successful uploads and error handling.
- Employee list dynamically updates after new employee uploads.

## Technologies Used

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **File Storage**: Cloudinary
- **Middleware**: Multer, Helmet, CORS
- **Toast Notifications**: React Toastify
- **Loading Spinner**: Custom CSS Spinner

## Setup Instructions

### Prerequisites

1. **Node.js**: Ensure you have Node.js installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).
2. **MongoDB**: Set up a MongoDB database. You can use a local instance or a cloud service like MongoDB Atlas.
3. **Cloudinary Account**: Create an account on [Cloudinary](https://cloudinary.com/) to manage image uploads.

### Clone the Repository

```bash
git clone https://github.com/remiges-tejas/Cloudinary-File-Upload-MERN.git
cd Cloudinary-File-Upload-MERN