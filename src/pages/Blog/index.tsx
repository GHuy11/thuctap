import React from 'react';
import {
    Box,
    Typography,
    Button,
} from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PeopleIcon from '@mui/icons-material/People';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';


const Blog = () => {

    const boxContent: { title: string; image: string }[] = [
        {
            title: 'Tips for Staying Calm and Profitable',
            image: '/images/blogimg2.png',
        },
        {
            title: 'Mastering the Art of Value Investing',
            image: '/images/blogimg3.png',
        },
        {
            title: 'How to Spread Risk and Boost Returns',
            image: '/images/blogimg4.png',
        },
        {
            title: 'Investment Strategies for Long-Term Wealth Building',
            image: '/images/blogimg5.png',
        },
    ]

    return (
        <Box >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {
                        xs: 'column', // iPhone
                        sm: 'column', // iPad
                        md: 'row', // Desktop
                    },
                    alignItems: {
                        xs: 'center',
                        sm: 'center',
                        md: 'flex-start',
                    },
                    gap: {
                        xs: 4,
                        sm: 5,
                        md: 6,
                    },
                    px: {
                        sm: 4,
                        md: 8,
                    },
                    py: {
                        xs: 4,
                        sm: 6,
                        md: 8,
                    },
                }}
            >
                {/* Left side - Text content */}
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h3" fontWeight="bold" gutterBottom>
                        Blog
                    </Typography>
                    <Typography variant="body1" color="text.secondary" mb={4}>
                        Take control of your financial future and achieve the life you’ve always dreamed of.
                    </Typography>
                </Box>

                {/* Right side - Image & Income Box */}
                <Box sx={{ flex: 1, position: 'relative', textAlign: 'center' }}>
                    <img
                        src="/images/blogimg1.png"
                        alt="Man on phone"
                        style={{ borderRadius: '8px', width: '100%', maxWidth: 450 }}
                    />
                </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, px: { md: 20 }, gap: 6, mt: 10 }}>
                {/* Danh sách bài viết bên trái */}
                <Box sx={{ flex: 3, display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {boxContent.map((post, index) => (
                        <Box key={index} sx={{ display: 'flex', gap: 2 }}>
                            <Box
                                component="img"
                                src={post.image}
                                alt={post.title}
                                sx={{
                                    width: 150,
                                    height: 100,
                                    objectFit: 'cover',
                                    borderRadius: 2,
                                    flexShrink: 0,
                                }}
                            />
                            <Box>
                                <Typography variant="body2" color="text.secondary">
                                    <CalendarMonthIcon sx={{fontSize:20}}/> November 10, 2023 &nbsp; | &nbsp; <CalendarTodayIcon sx={{fontSize:20}}/>  Investment
                                </Typography>
                                <Typography variant="subtitle1" fontWeight="bold">
                                    {post.title}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>

                {/* Sidebar bên phải */}
                <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {/* Recent Post */}
                    <Box>
                        <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                            RECENT POST
                        </Typography>
                        <Box component="ul" sx={{ pl: 2, m: 0, listStyle: 'none' }}>
                            {[
                                'Tips for Staying Calm and Profitable',
                                'Mastering the Art of Value Investing',
                                'How to Spread Risk and Boost Returns',
                                'Tips for Staying Calm and Profitable',
                                'Investment Strategies for Long-Term Wealth Building',
                            ].map((item, idx) => (
                                <li key={idx}>
                                    <Typography variant="body2" sx={{ mb: 1 }}>
                                        {item}
                                    </Typography>
                                </li>
                            ))}
                        </Box>
                    </Box>

                    {/* Our Services */}
                    <Box sx={{ p: 2, backgroundColor: '#f5f5f5', borderRadius: 3 }}>
                        <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                            OUR SERVICES
                        </Typography>
                        <Box component="ul" sx={{ pl: 0, m: 0, listStyle: 'none' }}>
                            {[
                                { icon: <MonetizationOnIcon />, text: 'Investment Advisory' },
                                { icon: <PeopleIcon />, text: 'Portfolio Management' },
                                { icon: <TrackChangesIcon />, text: 'Mutual Funds and ETFs' },
                                { icon: <LocationOnIcon />, text: 'Financial Planning' },
                            ].map((service, idx) => (
                                <li key={idx}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                        <Box sx={{ mr: 1 }}>{service.icon}</Box>
                                        <Typography variant="body2">{service.text}</Typography>
                                    </Box>
                                </li>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>


            <Box sx={{ px: { md: 20 }, mt: 10 }}>
                <Box
                    sx={{
                        height: 380,
                        borderRadius: 6,
                        backgroundImage: 'url(/images/Rectangle8.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'top',
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        color: '#fff',
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.4)',
                            borderRadius: 6,
                            overflow: 'hidden'
                        }}
                    />
                    {/* Nội dung */}
                    <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 600 }}>
                        <Typography variant="h4" fontWeight="bold" gutterBottom>
                            Unlock Exceptional Financial Gains
                        </Typography>
                        <Typography variant="subtitle1" sx={{ mb: 3 }}>
                            Elevate your economic potential with our cutting-edge insights and steadfast guidance.
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                backgroundColor: '#1f3c88',
                                '&:hover': {
                                    backgroundColor: '#162e6f',
                                },
                                borderRadius: '20px',
                                px: 4,
                            }}
                        >
                            GET STARTED
                        </Button>
                    </Box>
                </Box>
            </Box>


        </Box>
    );
};

export default Blog;
