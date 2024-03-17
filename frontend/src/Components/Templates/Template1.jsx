// Template1.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { red } from '@mui/material/colors';

const Template1 = ({ formData }) => {
  const { name, email, phone, dob, linkedIn, education, experience, skills, objective } = formData;

  return (
    <Box p={2}>
      <Typography variant="h4" color={'red'} gutterBottom>
        {name}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Email: {email}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Phone: {phone}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Date of Birth: {dob}
      </Typography>
      <Typography variant="body1" gutterBottom>
        LinkedIn: {linkedIn}
      </Typography>

      <Typography variant="h5" gutterBottom mt={2}>
        Education
      </Typography>
      {education.map((edu, index) => (
        <Box key={index} mb={2}>
          <Typography variant="subtitle1" gutterBottom>
            {edu.degree} in {edu.institute} ({edu.year})
          </Typography>
        </Box>
      ))}

      <Typography variant="h5" gutterBottom mt={2}>
        Experience
      </Typography>
      {experience.map((exp, index) => (
        <Box key={index} mb={2}>
          <Typography variant="subtitle1" gutterBottom>
            {exp.title} at {exp.company} ({exp.startDate} - {exp.endDate})
          </Typography>
          <Typography variant="body1" gutterBottom>
            {exp.details}
          </Typography>
        </Box>
      ))}

      <Typography variant="h5" gutterBottom mt={2}>
        Skills
      </Typography>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <Typography variant="h5" gutterBottom mt={2}>
        Objective
      </Typography>
      <Typography variant="body1" gutterBottom>
        {objective}
      </Typography>
    </Box>
  );
};

export default Template1;
