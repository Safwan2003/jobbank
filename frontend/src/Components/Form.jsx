import React, { useState, useRef } from 'react';
import { Box, Button, Grid, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import Template1 from './Templates/Template1';
import Template2 from './Templates/Template2';
import Template3 from './Templates/Template3';
import ReactToPrint from 'react-to-print';
import axios from 'axios'; // Import Axios for making HTTP requests

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    linkedIn: '',
    education: [{ institute: '', degree: '', year: '' }],
    experience: [{ company: '', title: '', startDate: '', endDate: '', details: '' }],
    skills: [''],
    objective: '',
  });
  const [section, setSection] = useState(1);
  const [educationHeadings, setEducationHeadings] = useState(['Education 1']);
  const [selectedTemplate, setSelectedTemplate] = useState('Template1');
  const componentRef = useRef();

  const handleChange = (e, index, type) => {
    const { name, value } = e.target;
   if (name === 'institute' || name === 'degree' || name === 'year') {
     const updatedEducation = [...formData.education];
     updatedEducation[index][name] = value;
     setFormData({ ...formData, education: updatedEducation });
   } else if (type === 'experience') {
      const updatedExperience = [...formData.experience];
      updatedExperience[index][name] = value;
      setFormData({ ...formData, experience: updatedExperience });
    } else if (type === 'skills') {
      const updatedSkills = [...formData.skills];
      updatedSkills[index] = value;
      setFormData({ ...formData, skills: updatedSkills });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleNext = () => {
    setSection(section + 1);
  };

  const handlePrevious = () => {
    setSection(section - 1);
  };

  const handleSubmit = async() => {
  
  try {
 const res =await axios.post('http://localhost:3000/resumes',formData)   
console.log(res.data)  
} catch (error) {
    console.error(error.message)
  }
  
  };

  const handleAddEducation = () => {
    const newEducation = { institute: '', degree: '', year: '' };
    setFormData({
      ...formData,
      education: [...formData.education, newEducation],
    });
    setEducationHeadings([
      ...educationHeadings,
      `Education ${formData.education.length + 1}`,
    ]);
  };

  const handleDeleteEducation = (index) => {
    const updatedEducation = formData.education.filter((_, i) => i !== index);
    setFormData({ ...formData, education: updatedEducation });
  };

  const handleAddExperience = () => {
    const newExperience = { company: '', title: '', startDate: '', endDate: '', details: '' };
    setFormData({
      ...formData,
      experience: [...formData.experience, newExperience],
    });
  };

  const handleDeleteExperience = (index) => {
    const updatedExperience = formData.experience.filter((_, i) => i !== index);
    setFormData({ ...formData, experience: updatedExperience });
  };

  const handleAddSkill = () => {
    setFormData({
      ...formData,
      skills: [...formData.skills, ''],
    });
  };

  const handleDeleteSkill = (index) => {
    const updatedSkills = formData.skills.filter((_, i) => i !== index);
    setFormData({ ...formData, skills: updatedSkills });
  };

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
  };

  const generateCV = () => {
    if (selectedTemplate === 'Template1') {
      return <Template1 formData={formData} />;
    } else if (selectedTemplate === 'Template2') {
      return <Template2 formData={formData} />;
    }
    else if (selectedTemplate === 'Template3') {
      return <Template3 formData={formData} />;
    }
  };

  const handleSubmitCv = () => {
    const cvContent = generateCV();
  
    html2pdf()
      .from(cvContent.outerHTML) // Pass the outerHTML of the generated CV content
      .set({
        margin: 1,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, letterRendering: true },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      })
      .toPdf()
      .outputPdf('blob') // Output the PDF as a Blob
      .then((pdfBlob) => {
        const url = URL.createObjectURL(pdfBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url); // Clean up the URL object
      });
  };
  
  

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Section {section}
      </Typography>
      <Stack direction="column" spacing={3} alignItems="center">
        {section === 1 && (
          <>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              sx={{ width: '300px' }}
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              sx={{ width: '300px' }}
            />
            <TextField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              sx={{ width: '300px' }}
            />
            <TextField
              label="Date Of Birth"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              sx={{ width: '300px' }}
            />
            <TextField
              label="LinkedIn"
              name="linkedIn"
              value={formData.linkedIn}
              onChange={handleChange}
              sx={{ width: '300px' }}
            />
          </>
        )}
        {section === 2 && (
          <Stack direction={'column'} spacing={4}>
            {/* Education section */}
            {formData.education.map((edu, index) => (
                <Box key={index} >
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                    {educationHeadings[index]}
                  <Button variant='contained' color='warning' size='small' onClick={() => handleDeleteEducation(index)} sx={{marginLeft:1}}>Delete</Button>
                  </Typography>
                  <Stack spacing={2}>
                <TextField
                  label="Institute"
                  name="institute"
                  value={edu.institute}
                  onChange={(e) => handleChange(e, index)}
                  sx={{ width: '300px' }}
                />
                <TextField
                  label="Degree"
                  name="degree"
                  value={edu.degree}
                  onChange={(e) => handleChange(e, index)}
                  sx={{ width: '300px' }}
                />
                <TextField
                  label="Year"
                  name="year"
                  value={edu.year}
                  onChange={(e) => handleChange(e, index)}
                  sx={{ width: '300px' }}
                />
                </Stack>
              </Box>
            ))}
            
            <Stack direction={"row"} spacing={2} alignItems={'center'} justifyContent={'center'}>
            <Button variant="contained" size='small' color='info' onClick={handleAddEducation}>
              Add Education
            </Button>
            </Stack>
          </Stack>
        )}
        {section === 3 && (
          <Stack direction={'column'} spacing={4}>
            {/* Experience section */}
            {formData.experience.map((exp, index) => (
              <Box key={index}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                  Experience {index + 1}
                  <Button 
                    variant="outlined" 
                    size="small" 
                    color="error" 
                    onClick={() => handleDeleteExperience(index)}
                    sx={{ marginLeft: 1 }}
                  >
                    Delete
                  </Button>
                </Typography>
                <TextField
                  label="Company"
                  name="company"
                  value={exp.company}
                  onChange={(e) => handleChange(e, index, 'experience')}
                  sx={{ width: '300px' }}
                />
                <TextField
                  label="Job Title"
                  name="title"
                  value={exp.title}
                  onChange={(e) => handleChange(e, index, 'experience')}
                  sx={{ width: '300px' }}
                />
                <TextField
                  label="Start Date"
                  name="startDate"
                  value={exp.startDate}
                  onChange={(e) => handleChange(e, index, 'experience')}
                  sx={{ width: '300px' }}
                />
                <TextField
                  label="End Date"
                  name="endDate"
                  value={exp.endDate}
                  onChange={(e) => handleChange(e, index, 'experience')}
                  sx={{ width: '300px' }}
                />
                <TextField
                  label="Details"
                  name="details"
                  value={exp.details}
                  onChange={(e) => handleChange(e, index, 'experience')}
                  sx={{ width: '300px' }}
                  multiline
                  rows={4}
                />
              </Box>
            ))}
            <Button 
              variant="contained" 
              size="small" 
              color="info" 
              onClick={handleAddExperience}
            >
              Add Experience
            </Button>
          </Stack>
        )}
{section === 4 && (
          <Stack direction={'column'} spacing={4}>
            {/* Skills section */}
            {formData.skills.map((skill, index) => (
              <Box key={index}>
                <TextField
                  label="Skill"
                  name="skill"
                  value={skill}
                  onChange={(e) => handleChange(e, index, 'skills')}
                  sx={{ width: '300px' }}
                />
                <Button 
                  variant="outlined" 
                  size="small" 
                  color="error" 
                  onClick={() => handleDeleteSkill(index)}
                  sx={{ marginLeft: 1 }}
                >
                  Delete
                </Button>
              </Box>
            ))}
            <Button 
              variant="contained" 
              size="small" 
              color="info" 
              onClick={handleAddSkill}
            >
              Add Skill
            </Button>
          </Stack>
        )}
        {section === 5 && (
          <TextField
            label="Objective"
            name="objective"
            value={formData.objective}
            onChange={handleChange}
            sx={{ width: '300px' }}
          />
        )}
        <Stack direction="row" spacing={2}>
          {section > 1 && (
            <Button variant="contained" onClick={handlePrevious}>
              Previous
            </Button>
          )}
          {section < 6 ? (
            <Button variant="contained" onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          )}
        </Stack>
      </Stack>
      {/* Template selection */}

          {section === 6 && (
            <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Select
            value={selectedTemplate}
            onChange={(e) => handleTemplateSelect(e.target.value)}
            fullWidth
            label="Select Template"
          >
            <MenuItem value="Template1">Template 1</MenuItem>
            <MenuItem value="Template2">Template 2</MenuItem>
            <MenuItem value="Template3">Template 3</MenuItem>
            {/* Add more options for additional templates */}
          </Select>
        </Grid>
        <Grid item xs={12}>
      
      <ReactToPrint trigger={()=>(
          <Button variant="contained" color="primary" onClick={handleSubmitCv}>
            Generate CV in pdf
          </Button>
          )} content={()=>componentRef.current} />
        </Grid>
      </Grid>
      {/* Template selection */}

      <Box mt={3}>
        <Typography variant="h6" gutterBottom>
          Preview
        </Typography>
        {/* Generate CV button */}
        <Box border="1px solid #ccc" p={2} borderRadius={4} ref={componentRef}>
          {generateCV()}
        </Box>
      </Box>
      </>
      )}
    </Box>
  );
};

export default Form;
