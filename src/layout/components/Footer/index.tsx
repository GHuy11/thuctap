import React from 'react';
import { Box, Typography, Stack, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { Link } from 'react-router-dom';

const Footer = () => {
  const Links: { label: string, path: string }[] = [
    {
      label: 'About us',
      path: '/about'
    },
    {
      label: 'Contact',
      path: '/contact'
    },
    {
      label: 'Help Center',
      path: '/helpcenter'
    },
    {
      label: 'Testimonials',
      path: '/testimonials'
    },
  ]
  return (
    <Box sx={{ py: 8, px: {  md: 30 }, backgroundColor: '#fff', width:'100%' , maxWidth:{xs:'340px',md:'780px'},mx:'auto'}}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} justifyContent="space-between">

        <Box>
          <Box
            sx={{
              width: 40,
              height: 40,
              backgroundColor: '#2d4667',
              borderRadius: '50%',
              mb: 2,
            }}
          />
          <Stack direction="row" spacing={1}>
            <IconButton size="small"><FacebookIcon fontSize="small" /></IconButton>
            <IconButton size="small"><TwitterIcon fontSize="small" /></IconButton>
            <IconButton size="small"><YouTubeIcon fontSize="small" /></IconButton>
          </Stack>
          <Typography variant="body2" sx={{ mt: 1, color: '#555' }}>
            Powered by Sociallib
          </Typography>
        </Box>

        {/* Office Info */}
        <Box>
          <Typography fontWeight="bold" gutterBottom color="#2d4667">
            OFFICE
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            186, G Block, Road-7, South<br />
            Point, Jersey, Network.
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <EmailIcon fontSize="small" />
            <Typography variant="body2">inqery@investa.io</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center" mt={1}>
            <PhoneIphoneIcon fontSize="small" />
            <Typography variant="body2">+1 496 6696369</Typography>
          </Stack>
        </Box>

        {/* Menu */}
        <Box>
          <Typography fontWeight="bold" gutterBottom color="#2d4667">
            MENU
          </Typography>
          <Stack spacing={1}>
            {Links.map((i) => (
              <Typography component={Link} to={i.path} color='text.secondary' sx={{textDecoration:'none',cursor:'pointer'}}>{i.label}</Typography>
            ))}
          </Stack>
        </Box>

        {/* Links */}
        <Box>
          <Typography fontWeight="bold" gutterBottom color="#2d4667">
            LINKS
          </Typography>
          <Stack spacing={1}>
            {Links.map((i) => (
              <Typography component={Link} to={i.path} color='text.secondary' sx={{textDecoration:'none',cursor:'pointer'}}>{i.label}</Typography>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
