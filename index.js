// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const employeeRoutes = require('./routes/employee');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/employees', employeeRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Start the server
const PORT = process.env.PORT || 5006;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});