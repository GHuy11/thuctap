import React from 'react';
import {
    Box,
    Typography,
    Button,
    Paper,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
function Services() {
    const content:string[] = 
        [
        'Investment Advisory',
        'Portfolio Management',
        'Mutual Funds and ETFs',
        'Financial Planning',
        'Wealth Management',
        'Retirement Solutions',
        'Educational Resources',
        'Client Reporting',
        'Customer Support',
      ]
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
                {/* Left side - Text content */}
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h3" fontWeight="bold" gutterBottom>
                        Services
                    </Typography>
                    <Typography variant="body1" color="text.secondary" mb={4}>
                        Take charge of your financial future and realize the life you've always aimed for.
                    </Typography>

                </Box>

                {/* Right side - Image & Income Box */}
                <Box sx={{ flex: 1, position: 'relative', textAlign: 'center' }}>
                    <img
                        src="/images/blogimg3.png"
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
                {/* Left side - text content */}
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        Expert Guidance for Optimal Investments
                    </Typography>
                    <Typography variant="body1" color="text.secondary" mb={2}>
                        Our experienced team provides personalized guidance to help you navigate the complexities of the financial markets. We are dedicated to crafting strategies that enhance your investment portfolio’s performance while minimizing risk. Each plan is tailored to meet your individual financial goals and investment style.
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                        <Box>
                            <Typography variant="body2" color="text.secondary" mb={2}>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </Typography>
                            <Typography variant="body2" color="text.secondary" mb={4}>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </Typography>
                            <Button endIcon={<PlayArrowIcon />} sx={{ fontWeight: 600 }}>
                                GET STARTED
                            </Button>
                        </Box>
                        <Box
                            component="img"
                            src='images/Frame 48.png'
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

                {/* Right side - service list */}
                <Paper
                    elevation={0}
                    sx={{
                        backgroundColor: '#f2f4f8',
                        borderRadius: 4,
                        p: 3,
                        margin:0
                    }}
                >
                    {content.map((i,index)=>(
                        <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            borderBottom: index !== 8 ? '1px solid #ccc' : 'none',
                            py: 1.5,
                            gap: 2
                        }}
                    >

                        <ModeStandbyIcon />
                        <Typography variant="body1">{i}</Typography>
                    </Box>
                    ))}
                </Paper>
            </Box>

            <Box sx={{ px: { xs: 2, md: 20 } }}>
                <Box
                    sx={{
                        mt: 10,
                        backgroundColor: '#f2f4f8',
                        borderRadius: 3,
                        p: 3,
                        // flexDirection: { xs: 'column', md: 'row' },
                        gap: 4,
                    }}
                >
                    {/* Left */}
                    <Box sx={{
                        display: { md: 'flex' }, justifyContent: 'space-between',
                        textAlign: {
                            xs: 'center',
                            md: 'left',
                        },
                    }} >
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            gutterBottom
                            width="100%"

                        >
                            Secure Your Financial Destiny
                        </Typography>

                        <Box sx={{ maxWidth: { xs: '100%', md: '50%' } }}>
                            <Typography color="text.secondary" sx={{ mb: 2 }}>
                                Our commitment is to provide you with the knowledge and tools necessary
                                to make informed financial decisions. With our guidance, you can confidently pursue your financial goals.
                            </Typography>
                            <Button endIcon={<PlayArrowIcon />}>Learn More</Button>
                        </Box>

                    </Box>
                    <Box sx={{
                        display: { md: 'flex' }, justifyContent: 'space-between', mt: 6, textAlign: {
                            xs: 'center',
                            md: 'left',
                        },
                    }}>
                        <Box sx={{ maxWidth: { xs: '100%', md: 170 } }}>
                            <Box sx={{ width: 2, height: 2, backgroundColor: '#355070', p: 2, borderRadius: '10px', mb: 2, mx: { xs: 'auto', md: 0 } }}></Box>
                            <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
                                Live Report
                            </Typography>
                            <Typography variant="body2" color="text.secondary" >
                                Keep up with real-time financial market trends and forecasts
                            </Typography>
                        </Box>
                        <Box sx={{ maxWidth: { xs: '100%', md: 200 } }}>
                            <Box sx={{ width: 2, height: 2, backgroundColor: '#355070', p: 2, borderRadius: '10px', mb: 2, mx: { xs: 'auto', md: 0 } }}></Box>
                            <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
                                Complete Guide
                            </Typography>
                            <Typography variant="body2" color="text.secondary" >
                                Access a comprehensive overview of investment
                            </Typography>
                        </Box>
                        <Box sx={{ maxWidth: { xs: '100%', md: 220 } }}>
                            <Box sx={{ width: 2, height: 2, backgroundColor: '#355070', p: 2, borderRadius: '10px', mb: 2, mx: { xs: 'auto', md: 0 } }}></Box>
                            <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
                                Various Industries
                            </Typography>
                            <Typography variant="body2" color="text.secondary" >
                                Explore investment opportunities across a wide range
                            </Typography>
                        </Box>
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
                    FEATURES
                </Typography>

                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Invest with Precision Today
                </Typography>

                <Typography variant="body1" color="text.secondary" mb={4}>
                    Navigate through the global investment landscape with our expert guidance, ensuring every decision is calculated and potent.F                </Typography>

                <Box sx={{ maxWidth: { md: 250 }, mb: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', gap: 4 }}>
                    <img
                        src="/images/Frame 48.png"
                        alt="Investment discussion"
                        style={{
                            width: '100%',
                            borderRadius: '16px',
                        }}
                    />
                    <img
                        src="/images/Frame 49.png"
                        alt="Investment discussion"
                        style={{
                            width: '100%',
                            borderRadius: '16px',
                        }}
                    />
                    <img
                        src="/images/Frame 50.png"
                        alt="Investment discussion"
                        style={{
                            width: '100%',
                            borderRadius: '16px',
                        }}
                    />
                </Box>
            </Box>


        </Box>
    );
}

export default Services;
