import React from 'react';
import {
    Box,
    Typography,
    Paper,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import PublicIcon from '@mui/icons-material/Public';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
function Contact() {
    return (
        <Box sx={{ px: { xs: 2, md: 8 }, py: { xs: 4, md: 2 } }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    gap: 6,
                }}
            >

                <Box sx={{ flex: 1 }}>
                    <Typography variant="h3" fontWeight="bold" gutterBottom>
                        Contact Us
                    </Typography>
                    <Typography variant="body1" color="text.secondary" mb={4}>
                        Take control of your financial future and achieve the life you’ve always dreamed of.
                    </Typography>

                </Box>

                <Box sx={{ flex: 1, position: 'relative', textAlign: 'center' }}>
                    <img
                        src="/images/mapImage.png"
                        alt="Man on phone"
                        style={{ borderRadius: '8px', width: '100%', maxWidth: 450 }}
                    />

                </Box>
            </Box>


            <Box
                sx={{
                    mt: 10,
                    px: { xs: 2, md: 20 },
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'flex-start',
                    gap: 6,
                    // width:'100%'
                }}
            >
                <Paper
                    elevation={0}
                    sx={{
                        backgroundColor: '#f2f4f8',
                        borderRadius: 4,
                        margin: 0
                    }}
                >
                    <Box
                        component="img"
                        src='images/contactimga.png'
                        alt=''
                        sx={{
                            borderRadius: '12px',
                            width: { xs: '100%', md: '100%' },
                            height: 400,
                            objectFit: 'cover',
                            display: { xs: 'none', md: 'block' }
                        }}
                    />
                </Paper>


                <Box sx={{ flex: 1 }}>
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        Get in Touch
                    </Typography>
                    <Typography variant="body1" color="text.secondary" mb={2}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only f.
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2,  }}>
                                <ContactItem icon={<EmailIcon  sx={{ fontSize: 15 }}/>} label="Lorem Ipsum is simply" />
                                <ContactItem icon={<LocationOnIcon sx={{ fontSize: 15 }}/>} label="Lorem Ipsum is simply" />
                                <ContactItem icon={<PhoneIcon sx={{ fontSize: 15 }}/>} label="Lorem Ipsum is simply" />
                                <ContactItem icon={<PublicIcon sx={{ fontSize: 15 }}/>} label="Lorem Ipsum is simply" />
                                <ContactItem icon={<CalendarTodayIcon sx={{ fontSize: 15 }}/>} label="Lorem Ipsum is simply" />
                                <ContactItem icon={<LinkedInIcon sx={{ fontSize: 15 }}/>} label="Lorem Ipsum is simply" />
                                <ContactItem icon={<FacebookIcon sx={{ fontSize: 15 }}/>} label="Lorem Ipsum is simply" />
                            </Box>
                        <Box
                            component="img"
                            src='images/contactimage3.png'
                            alt=''
                            sx={{
                                borderRadius: '12px',
                                width: { xs: '100%', md: '50%' },
                                height: 200,
                                objectFit: 'cover',
                                mt:2,
                                display:{xs:'none',md:'block'}
                            }}
                        />
                    </Box>

                </Box>


            </Box>
        </Box>
    );
}

function ContactItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Box sx={{ color: 'text.secondadry' }}>{icon}</Box>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
    </Box>
  );
}


export default Contact;
