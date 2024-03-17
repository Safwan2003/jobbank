// index.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Resume = require('./resume');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors())
// Connect to MongoDB
mongoose.connect('mongodb+srv://shaffan:shaffan123@mechanics.ugaxpvh.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Middleware
app.use(bodyParser.json());

// GET API to fetch all resumes
app.get('/resumes', async (req, res) => {
  try {
    const resumes = await Resume.find();
    res.json(resumes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST API to create a new resume
app.post('/resumes', async (req, res) => {
  const resume = new Resume({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    dob: req.body.dob,
    linkedIn: req.body.linkedIn,
    education: req.body.education,
    experience: req.body.experience,
    skills: req.body.skills,
    objective: req.body.objective
  });

  try {
    const newResume = await resume.save();
    res.status(201).json(newResume);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
