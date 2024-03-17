import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Grid, Card, CardContent } from '@mui/material';
import axios from 'axios';

const JobBank = () => {
  const [resumes, setResumes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [filterBy, setFilterBy] = useState('');

  useEffect(() => {
    getResumes();
  }, []);

  const getResumes = async () => {
    try {
      const res = await axios.get('http://localhost:3000/resumes');
      setResumes(res.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSort = (criteria) => {
    setSortBy(criteria);
  };

  const handleFilter = (criteria) => {
    setFilterBy(criteria);
  };

  let filteredResumes = [...resumes];

if (searchQuery) {
  filteredResumes = filteredResumes.filter(resume =>
    (resume.name && resume.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (resume.position && resume.position.toLowerCase().includes(searchQuery.toLowerCase()))
  );
}

if (filterBy) {
  filteredResumes = filteredResumes.filter(resume =>
    resume.technologies && resume.technologies.some(tech => tech.toLowerCase() === filterBy.toLowerCase())
  );
}

if (sortBy) {
  filteredResumes.sort((a, b) => {
    if (sortBy === 'experience') {
      return b[sortBy] - a[sortBy];
    } else {
      return (a[sortBy] || '').localeCompare(b[sortBy] || '');
    }
  });
}

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Job Bank
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Search"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Sort By</InputLabel>
            <Select
              value={sortBy}
              onChange={(e) => handleSort(e.target.value)}
              label="Sort By"
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="name">Name</MenuItem>
              <MenuItem value="position">Position</MenuItem>
              <MenuItem value="experience">Experience</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={3}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Filter By Technology</InputLabel>
            <Select
              value={filterBy}
              onChange={(e) => handleFilter(e.target.value)}
              label="Filter By Technology"
            >
              <MenuItem value="">All</MenuItem>
              {/* Extract unique technologies from resumes */}
              {Array.from(new Set(resumes.flatMap(resume => resume.technologies || []))).map(tech => (
                <MenuItem key={tech} value={tech}>{tech}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {filteredResumes.map(resume => (
          <Grid key={resume._id} item xs={12} sm={6} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6">{resume.name}</Typography>
                <Typography variant="subtitle1">{resume.position}</Typography>
                <Typography variant="subtitle2">Experience:</Typography>
                <ul>
                  {resume.experience.map((exp, index) => (
                    <li key={index}>
                      {exp.title} at {exp.company} ({exp.startDate} - {exp.endDate})
                      {Array.isArray(exp.details) && (
                        <ul>
                          {exp.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
                <Typography variant="subtitle2">Skills:</Typography>
                <ul>
                  {resume.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
                <Typography variant="subtitle2">Education:</Typography>
                <ul>
                  {resume.education.map((edu, index) => (
                    <li key={index}>
                      {edu.degree} in {edu.fieldOfStudy} at {edu.institute} ({edu.year})
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default JobBank;
