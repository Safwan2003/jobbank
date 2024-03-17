import * as React from 'react';
import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import PhoneIcon from '../../assets/phone.svg';
import MailIcon from '../../assets/mail.svg';
import LinkedinIcon from '../../assets/linkedin.svg';
import { styled } from '@mui/material/styles';
import image from '../../assets/user.jpeg';

const Template3 = ({ formData }) => {
  const { name, email, phone, dob, linkedIn, education, experience, skills, objective } = formData;

  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={4} sx={{ backgroundColor: "rgb(243 244 246)", minHeight: "100vh" }}>
      <Grid item xs={12} sm={6} md={4}>
        <Box sx={{ backgroundColor: 'white', borderRadius: 2, padding: 4 }}>
          <Avatar src={image} alt={'img'} sx={{ width: '100px', height: '100px', margin: 'auto' }} />
          <Typography variant='h5' fontWeight="bold" mt={2}>{name}</Typography>
          <Stack direction="row" alignItems="center" spacing={1} mt={2}>
            <img src={PhoneIcon} alt="phone" style={{ width: 24, height: 24 }} />
            <Typography variant='body1'>{phone}</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <img src={MailIcon} alt="mail" style={{ width: 24, height: 24 }} />
            <Typography variant='body1'>{email}</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <img src={LinkedinIcon} alt="linkedin" style={{ width: 24, height: 24 }} />
            <Typography variant='body1'>{linkedIn}</Typography>
          </Stack>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={8}>
        <Box sx={{ padding: 4 }}>
          <Typography variant='subtitle1' fontWeight="thin">{dob}</Typography>
          <Typography variant='subtitle1' fontWeight="thin">Developer</Typography>
          <Box mt={4}>
            <Typography variant='h5' fontWeight="bold">OBJECTIVE</Typography>
            <Typography variant='body1' fontWeight="thin">{objective}</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
  <Item>
    <Typography variant='h6' fontWeight="bold">EXPERIENCE</Typography>
    <Box mt={2}>
      {experience.map((exp, index) => (
        <Box key={index} mb={2}>
          <Typography variant='body1' fontWeight="bold">{exp.title}</Typography>
          <Typography variant='subtitle1'>{exp.company}</Typography>
          <Typography variant='subtitle2'>{exp.startDate} - {exp.endDate}</Typography>
          {Array.isArray(exp.details) && exp.details.map((detail, idx) => (
            <Typography key={idx} variant='body2'>{detail}</Typography>
          ))}
        </Box>
      ))}
    </Box>
  </Item>
</Grid>

   <Grid item xs={12} md={6}>
        <Item>
          <Typography variant='h6' fontWeight="bold">SKILLS</Typography>
          <Box mt={2}>
            {skills.map((skill, index) => (
              <Typography key={index} variant='body1'>{skill}</Typography>
            ))}
          </Box>
        </Item>
      </Grid>
      <Grid item xs={12} md={6}>
        <Item>
          <Typography variant='h6' fontWeight="bold">EDUCATION</Typography>
          <Box mt={2}>
            {education.map((edu, index) => (
              <Typography key={index} variant='body1'>{edu}</Typography>
            ))}
          </Box>
        </Item>
      </Grid>
    </Grid>
  );
}

export default Template3;
