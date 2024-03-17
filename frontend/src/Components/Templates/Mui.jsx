// import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';
// // import React from 'react';
// import * as React from 'react';
// import Paper from '@mui/material/Paper';

// import image from '../../assets/user.jpeg';
// import PhoneIcon from '../../assets/phone.svg';
// import MailIcon from '../../assets/mail.svg';
// import LinkedinIcon from '../../assets/linkedin.svg';

// import { styled } from '@mui/material/styles';



// const Mui = () => {
  //   const Item = styled(Paper)(({ theme }) => ({
  
    //     // ...theme.typography.body2,
    //     padding: theme.spacing(1),
    //     textAlign: 'center',
    //     width:"300px",
    //     color: theme.palette.text.secondary,
    //   }));
    
    //   return (
      //     <Grid container sx={{ backgroundColor: "grey" }}>
      //       <Grid item xs={6} lg={4} p={3}  alignItems={'center'} justifyContent={'center'}>
      //         <Box sx={{backgroundColor:'white',width:300, borderRadius:2}}>
      //           <Stack alignItems="center" spacing={2}>
      //             <Avatar src={image} alt={'img'} sx={{ width: '150px', height: '100%' }} />
//             <Typography variant='h5' fontWeight="bold">Contact</Typography>
//             <Stack >
//             <Stack direction="row" alignItems="center" spacing={1}>
//               <img src={PhoneIcon} sx={{ width: 24, height: 24 }} />
//               <Typography variant='subtitle1' fontWeight="bold">Contact</Typography>
//             </Stack>
//             <Stack direction="row" alignItems="center" spacing={1}>
//               <img src={MailIcon} sx={{ width: 24, height: 24 }} />
//               <Typography variant='subtitle1' fontWeight="bold">Contact</Typography>
//             </Stack>
//             <Stack direction="row" alignItems="center" spacing={1}>
//               <img src={LinkedinIcon} sx={{ width: 24, height: 24 }} />
//               <Typography variant='subtitle1' fontWeight="bold">Contact</Typography>
//             </Stack>
//             </Stack>
//           </Stack>
//         </Box>
//       </Grid>
//       <Grid item xs={6} p={5}>
//       <Stack>     
//         <Typography variant='h4' fontWeight="bold" >Safwan Ali</Typography>
//         <Typography variant='subtitle1' fontWeight="thin" letterSpacing={4} >Developer</Typography>
//         </Stack>
//       <Stack direction={'column'} spacing={2} marginTop={6}>     
//         <Typography variant='h5' fontWeight="bold">OBJECTIVE</Typography>
//         <Typography variant='body1' fontWeight="thin" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nobis impedit cupiditate ad assumenda odit, eaque reiciendi</Typography>
//         </Stack>
//       </Grid>
//       <Grid xs={6} lg={3}  >
//             <Item sx={{backgroundColor:"grey"}}>
//               <Box
                
//                 sx={{ fontSize: '18px', textTransform: 'uppercase', color:"black" }} fontWeight={'bold'}
//               >
//                 EXPERIENCE
//               </Box>
//               <Box marginRight={12}>
//                 <li>Year<br/>Company</li>
//                 <li>Year<br/>Company</li>
//                 <li>Year<br/>Company</li>
//               </Box>
            
//               <Box

//                 sx={{ fontSize: '18px', textTransform: 'uppercase', color:"black" }} fontWeight={'bold'}
//               >
//               Skills
//               </Box>
//               <Box marginRight={12}>
//                 <li>Year<br/>Company</li>
//                 <li>Year<br/>Company</li>
//                 <li>Year<br/>Company</li>
//               </Box>
//             </Item>
//           </Grid>
//           <Grid xs={6} lg={3}  >
//             <Item>
//               <Box
                
//                 sx={{ fontSize: '18px', textTransform: 'uppercase', color:"black" }} fontWeight={'bold'}
//               >
//                 Education
//               </Box>
//               <Box marginRight={12}>
//                 <li>Year<br/>Institute</li>
//                 <li>Year<br/>Company</li>
//                 <li>Year<br/>Company</li>
//               </Box>
//             </Item>

//             </Grid>
//     </Grid>

//      );
//    }





// export default Mui;



import * as React from 'react';
import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import PhoneIcon from '../../assets/phone.svg';
import MailIcon from '../../assets/mail.svg';
import LinkedinIcon from '../../assets/linkedin.svg';
import { styled } from '@mui/material/styles';
import image from '../../assets/user.jpeg';

const Mui = () => {
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    width: "300px",
    color: theme.palette.text.secondary,
  }));

  return (
    <Grid container sx={{ backgroundColor: "rgb(243 244 246)", minHeight: "100vh" }}>
      <Grid item  p={3} justifyContent={'center'}>
        <Box sx={{ backgroundColor: 'white', width: 300, borderRadius: 2 }}>
          <Stack alignItems="center" spacing={2} p={2}>
            <Avatar src={image} alt={'img'} sx={{ width: '150px', height: '150px' }} />
            <Typography variant='h5' fontWeight="bold">Contact</Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              <img src={PhoneIcon} alt="phone" style={{ width: 24, height: 24 }} />
              <Typography variant='subtitle1' fontWeight="bold">Contact</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <img src={MailIcon} alt="mail" style={{ width: 24, height: 24 }} />
              <Typography variant='subtitle1' fontWeight="bold">Contact</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <img src={LinkedinIcon} alt="linkedin" style={{ width: 24, height: 24 }} />
              <Typography variant='subtitle1' fontWeight="bold">Contact</Typography>
            </Stack>
          </Stack>
        </Box>
      </Grid>
      <Grid item >
        <Box p={5}>
          <Stack>
            <Typography variant='h4' fontWeight="bold">Safwan Ali</Typography>
            <Typography variant='subtitle1' fontWeight="thin" letterSpacing={4}>Developer</Typography>
          </Stack>
          <Stack direction={'column'} spacing={2} marginTop={6}>
            <Typography variant='h5' fontWeight="bold">OBJECTIVE</Typography>
            <Typography variant='body1' fontWeight="thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nobis impedit cupiditate ad assumenda odit, eaque reiciendi</Typography>
          </Stack>
        </Box>
      </Grid>
      <Grid item >
        <Item sx={{ backgroundColor: "rgb(243 244 246)" }}>
          <Typography variant='h6' fontWeight="bold">EXPERIENCE</Typography>
          <Box mt={1} mb={3}>
            <Typography variant='body1'>Year <br /> Company</Typography>
            <Typography variant='body1'>Year <br /> Company</Typography>
            <Typography variant='body1'>Year <br /> Company</Typography>
          </Box>
          <Typography variant='h6' fontWeight="bold">Skills</Typography>
          <Box mt={1}>
            <Typography variant='body1'>Year <br /> Company</Typography>
            <Typography variant='body1'>Year <br /> Company</Typography>
            <Typography variant='body1'>Year <br /> Company</Typography>
          </Box>
        </Item>
      </Grid>
      <Grid item p={5} >
        <Item>
          <Typography variant='h6' fontWeight="bold">Education</Typography>
          <Box mt={1}>
            <Typography variant='body1'>Year <br /> Institute</Typography>
            <Typography variant='body1'>Year <br /> Institute</Typography>
            <Typography variant='body1'>Year <br /> Institute</Typography>
          </Box>
        </Item>
      </Grid>
    </Grid>
  );
}

export default Mui;
