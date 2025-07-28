import React from 'react';
import {
    Box,
    Typography,
    Button,
    Paper,
} from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PeopleIcon from '@mui/icons-material/People';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';



const Opportunities = () => {

    const boxContent = [
        {
            title: 'International Art Museum',
            image: '/images/Rectangle1.png',
        },
        {
            title: 'Web Application Investment Program',
            image: '/images/Rectangle 9.png',
        },
        {
            title: 'Construction for School Building',
            image: '/images/Rectangle3.png',
        },
        {
            title: 'Autoparts Gear Manufacture',
            image: '/images/Rectangle4.png',
        },
        {
            title: 'International Art Museum',
            image: '/images/Frame 48.png',
        },
        {
            title: 'Web Application Investment Program',
            image: '/images/Frame 49.png',
        },
        {
            title: 'Construction for School Building',
            image: '/images/Frame 50.png',
        },
        {
            title: 'Autoparts Gear Manufacture',
            image: '/images/blogimg4.png',
        },
    ];
    return (
        <Box sx={{ px: { xs: 2, md: 8 }, py: { xs: 4, md: 2 },width:'100%' , maxWidth:'1100px',mx:'auto' }}>
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
                       Opportunities
                    </Typography>
                    <Typography variant="body1" color="text.secondary" mb={4}>
                        Take command of your financial future and transcend to the life you've always envisioned.
                         Unleash potential and master the art of investment with unparalleled ease and precision..
                    </Typography>
                </Box>

                <Box sx={{ flex: 1, position: 'relative', textAlign: 'center' }}>
                    <img
                        src="/images/Rectangle7.png"
                        alt="Man on phone"
                        style={{ borderRadius: '8px', width: '100%', maxWidth: 450 }}
                    />
                </Box>
            </Box>
            <Box sx={{ mt: 10, px: { xs: 2, md: 20 } }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        gap: 2,
                        mt: 4,
                    }}
                >
                    {boxContent.map((item, index) => (
                        <Paper
                            key={index}
                            sx={{
                                width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(47% - 18px)' },
                                borderRadius: 3,
                                p: 2,
                                display: {
                                    xs: 'block', md: 'flex',
                                },
                            }}
                            elevation={2}
                        >
                            <Box
                                component="img"
                                src={item.image}
                                alt={item.title}
                                sx={{
                                    borderRadius: '12px',
                                    width: { xs: '100%', md: '50%' },
                                    height: 200,
                                    objectFit: 'cover',
                                }}
                            />
                            <Box sx={{ marginLeft: '10px' }}>
                                <Typography variant='h6' sx={{ fontSize: 16, fontStyle: 'Bold', fontWeight: 700 }} >
                                    {item.title}
                                </Typography>
                                <Box mt={1} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <MonetizationOnIcon sx={{ fontSize: 15 }} />
                                        <Typography variant="body2" color="text.secondary">Valuation $5M</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <PeopleIcon sx={{ fontSize: 15 }} />
                                        <Typography variant="body2" color="text.secondary">75 Investors</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <TrackChangesIcon sx={{ fontSize: 15 }} />
                                        <Typography variant="body2" color="text.secondary">Target $500,000</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <LocationOnIcon sx={{ fontSize: 15 }} />
                                        <Typography variant="body2" color="text.secondary">London, UK</Typography>
                                    </Box>
                                </Box>
                                <Button size="small" sx={{ mt: 1 }} endIcon={<PlayArrowIcon />}>
                                    Learn More
                                </Button>
                            </Box>
                        </Paper>
                    ))}
                </Box>
            </Box>


        </Box>
    );
};

export default Opportunities;
