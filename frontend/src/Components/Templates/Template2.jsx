// Template2.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Template2 = ({ formData }) => {
  // Destructure formData
  const { name, email, phone, dob, linkedIn, education, experience, skills, objective } = formData;

  // Convert text to uppercase
  const toUpperCase = (text) => {
    return text.toUpperCase();
  };

  return (
    <Box>
      <Box>
        <Typography variant="h3" fontWeight="bold">{toUpperCase(name)}</Typography>
        <Typography variant="subtitle1" fontStyle="italic">Developer</Typography>
        <Typography variant="body1">{objective}</Typography>
      </Box>
      <Box>
        <Box>
          <Typography variant="h4" fontWeight="bold">Contact</Typography>
          <Typography variant="body1">{phone}</Typography>
          <Typography variant="body1">{email}</Typography>
          <Typography variant="body1">{linkedIn}</Typography>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold">Experience</Typography>
          <ul>
            {experience.map((exp, index) => (
              <li key={index}>
                <Typography variant="body1">{exp.date}</Typography>
                <Typography variant="body1" fontWeight="bold">{toUpperCase(exp.title)}</Typography>
              </li>
            ))}
          </ul>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold">Skills</Typography>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>
                <Typography variant="body1">{toUpperCase(skill)}</Typography>
              </li>
            ))}
          </ul>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold">Education</Typography>
          <ul>
            {education.map((edu, index) => (
              <li key={index}>
                <Typography variant="body1">{edu.year}</Typography>
                <Typography variant="body1" fontWeight="bold">{toUpperCase(edu.degree)}</Typography>
                <Typography variant="body1">{edu.institute}</Typography>
              </li>
            ))}
          </ul>
          <Typography variant="body1" fontStyle="italic">Date of Birth: {dob}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Template2;
