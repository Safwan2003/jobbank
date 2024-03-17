// models/resume.js

const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  dob: { type: Date, required: true },
  linkedIn: { type: String },
  education: [{
    institute: { type: String },
    degree: { type: String },
    year: { type: String }
  }],
  experience: [{
    company: { type: String },
    title: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    details: { type: String }
  }],
  skills: [{ type: String }],
  objective: { type: String }
});

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;
