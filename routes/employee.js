// routes/employee.js

const express = require('express');
const multer = require('multer');
const cloudinary = require('../config/cloudinary');
const Employee = require('../models/Employee');

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Temporary storage

router.post('/upload', upload.single('avatar_img'), async (req, res) => {
  try {
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
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ error: 'Upload failed' });
  }
});

module.exports = router;