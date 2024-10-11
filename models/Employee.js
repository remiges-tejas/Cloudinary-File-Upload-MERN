// models/Employee.js

const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  avatar_img: {
    type: String,
  }, // URL of the image from Cloudinary
});

module.exports = mongoose.model("Employee", employeeSchema);
