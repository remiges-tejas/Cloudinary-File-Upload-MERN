// routes/employee.js

const express = require("express");
const multer = require("multer");
const cloudinary = require("../config/cloudinary");
const Employee = require("../models/Employee");
const fs = require("fs"); // File system module

const router = express.Router();
const upload = multer({ dest: "uploads/" }); // Temporary storage

router.post("/upload", upload.single("avatar_img"), async (req, res) => {
  try {
    // Check if file is uploaded
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // Create new employee record
    const employee = new Employee({
      username: req.body.username,
      name: req.body.name,
      age: req.body.age,
      designation: req.body.designation,
      avatar_img: result.secure_url, // Save Cloudinary URL
    });

    await employee.save();

    // Clean up temporary file after successful upload
    fs.unlinkSync(req.file.path); // Remove the temporary file
    res.status(201).json(employee);
  } catch (error) {
    // Clean up temporary file if upload fails
    if (req.file) {
      fs.unlinkSync(req.file.path); // Remove the temporary file
    }

    console.error(error);
    res.status(500).json({ error: "Upload failed" });
  }
});

// Get all Employees
router.get("/", async (req, res) => {
  try {
    const response = await Employee.find({});

    // Check if response is empty
    if (response.length === 0) {
      return res.status(404).json({
        msg: "No employee data found.",
      });
    }

    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: "Unable to fetch data! Something went wrong!",
    });
  }
});

module.exports = router; // Ensure this line is present
