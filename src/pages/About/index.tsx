import React from 'react';
import {
    Box,
    Typography,
    Paper,
} from '@mui/material';
function About() {
    return (
        <Box sx={{ px: { xs: 2, md: 8 }, py: { xs: 4, md: 2 } ,width:'100%' , maxWidth:'1100px',mx:'auto'}}>
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
                        About  Us
                    </Typography>
                    <Typography variant="body1" color="text.secondary" mb={4}>
                        Take command of your financial future and transcend to the
                        life you've always envisioned. Unleash potential and master the art of investment with unparalleled ease and precision.
                    </Typography>

                </Box>

                {/* Right side - Image & Income Box */}
                <Box sx={{ flex: 1, position: 'relative', textAlign: 'center' }}>
                    <img
                        src="/images/Rectangle6.png"
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
                        src='images/Rectangle8.png'
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
                        Discover a World of Investment Opportunities
                    </Typography>
                    <Typography variant="body1" color="text.secondary" mb={2}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' },gap:3 }}>
                        <Box>
                            <Typography variant="body2" color="text.secondary" mb={2}>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur.
                            </Typography>
                            <Typography variant="body2" color="text.secondary" mb={4}>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            </Typography>
                        </Box>
                        <Box
                            component="img"
                            src='images/Rectangle 9.png'
                            alt=''
                            sx={{
                                borderRadius: '12px',
                                width: { xs: '100%', md: '50%' },
                                height: 200,
                                objectFit: 'cover',
                            }}
                        />
                    </Box>

                </Box>


            </Box>
                        <Box sx={{ mt: 10, textAlign: 'center', px: { xs: 2, md: 20 } }}>
                            <Typography
                                variant="caption"
                                sx={{
                                    display: 'inline-block',
                                    border: '1px solid black',
                                    px: 2,
                                    py: 0.5,
                                    borderRadius: '999px',
                                    fontWeight: 500,
                                    mb: 2,
                                }}
                            >
                                SOLUTION
                            </Typography>
            
                            <Typography variant="h4" fontWeight="bold" gutterBottom>
                                Smart Investment Solutions
                            </Typography>
            
                            <Typography variant="body1" color="text.secondary" mb={4}>
                                Maximize your returns with our expertly designed investment strategies.
                            </Typography>
            
                            <Box sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
                                <img
                                    src="/images/Rectangle 7.png"
                                    alt="Investment discussion"
                                    style={{
                                        width: '100%',
                                        borderRadius: '16px',
                                    }}
                                />
                            </Box>
            
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    flexWrap: 'wrap',
                                    gap: 6,
                                    mt: 4,
                                    borderBottom: 1,
                                    pb: 5
                                }}
                            >
                                <Box>
                                    <Typography variant="h5" fontWeight="bold">
                                        5k
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Investors
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h5" fontWeight="bold">
                                        96+
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Assets
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h5" fontWeight="bold">
                                        879
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Objects
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

        </Box>
    );
}

export default About;
