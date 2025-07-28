import React from 'react';
import {
    Box,
    Typography,
    Button,
    Paper,
    IconButton,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const Tips = () => {
const boxContent: { title: string; image: string }[] = [
        {
            title: 'Tips for Staying Calm and Profitable',
            image: '/images/blogimg2.png',
        },
        {
            title: 'Mastering the Art of Value Investing',
            image: '/images/blogimg3.png',
        }
    ]
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
                {/* Left side - Text content */}
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h3" fontWeight="bold" gutterBottom>
                        Tips for Staying <br /> Calm and <br /> Profitable
                    </Typography>
                </Box>

                <Box sx={{ flex: 1, position: 'relative', textAlign: 'center' }}>
                    <img
                        src="/images/blogimg2.png"
                        alt="Man on phone"
                        style={{ borderRadius: '8px', width: '100%', maxWidth: 450 }}
                    />
                </Box>
            </Box>

            <Box sx={{ px: { xs: 2, md: 20 }, mt: 10, display: 'flex', gap: 2 }}>
                <Box sx={{ flex: '1', lineHeight: 4 }}>
                    <Box
                        component='img'
                        src='images/blogimg1.png'
                        sx={{ width: '100%', maxHeight: 300 }}
                    />

                    <Typography color='text.secondary' sx={{ mb: 5 }}>
                        Introduction: Begin with a relatable anecdote about the stress of watching market fluctuations, highlighting the emotional aspect of investing. Body:
                        Discuss the importance of maintaining a long-term perspective.
                        Provide practical tips for emotional management during trading (e.g., setting automated trading rules, diversifying investments).
                        Include quotes from financial experts or studies on investor behavior. Conclusion: Encourage readers to cultivate patience and
                        discipline as key virtues in investing, ensuring they remain calm and thus more likely to be profitable. Photo suggestion: An image of someone meditating in a serene setting, symbolizing calm.
                    </Typography>
                    <Typography color='text.secondary'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                    <Typography
                        variant="caption"
                        sx={{
                            display: 'inline-block',
                            border: '1px solid black',
                            px: 2,
                            py: 0.5,
                            borderRadius: '999px',
                            fontWeight: 'bold',
                            mb: 2,
                        }}
                    >
                        RECENT POST
                    </Typography>
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
                </Box>
                <Box>
                    <Typography
                        variant="caption"
                        sx={{
                            display: 'inline-block',
                            border: '1px solid black',
                            px: 2,
                            py: 0.5,
                            borderRadius: '999px',
                            fontWeight: 'bold',
                            mb: 2,
                        }}
                    >
                        RECENT POST
                    </Typography>
                    <Box sx={{ lineHeight: 2 }}>
                        <Typography sx={{ fontWeight: 'bold', mb: 2, fontSize: 18, maxWidth: 300 }}>
                            Tips for Staying Calm and Profitable
                        </Typography>
                        <Typography sx={{ fontWeight: 'bold', mb: 2, fontSize: 18, maxWidth: 300 }}>
                            Tips for Staying Calm and Profitable
                        </Typography>
                        <Typography sx={{ fontWeight: 'bold', mb: 2, fontSize: 18, maxWidth: 300 }}>
                            Tips for Staying Calm and Profitable
                        </Typography>
                        <Typography sx={{ fontWeight: 'bold', mb: 2, fontSize: 18, maxWidth: 300 }}>
                            Tips for Staying Calm and Profitable
                        </Typography>
                    </Box>
                    <Typography
                        variant="caption"
                        sx={{
                            display: 'inline-block',
                            border: '1px solid black',
                            px: 2,
                            py: 0.5,
                            borderRadius: '999px',
                            fontWeight: 'bold',
                            mb: 2,
                        }}
                    >
                        OUR SERVICES
                    </Typography>
                    <Box sx={{ p: 4, backgroundColor: '#EBEEF1', gap: 1, borderRadius: 3, }}>
                        <Box sx={{  display:'flex', gap:2, textAlign:'center',mb:2}}>
                            <PeopleIcon />
                            <Typography sx={{color:'#626060' }}>
                                Investment Advisory
                            </Typography>
                        </Box>
                        <Box sx={{  display:'flex', gap:2, textAlign:'center',mb:2}}>
                            <PeopleIcon />
                            <Typography sx={{color:'#626060' }}>
                                Investment Advisory
                            </Typography>
                        </Box>
                        <Box sx={{  display:'flex', gap:2, textAlign:'center',mb:2}}>
                            <PeopleIcon />
                            <Typography sx={{color:'#626060' }}>
                                Investment Advisory
                            </Typography>
                        </Box>

                    </Box>
                </Box>
            </Box>

            <Box sx={{ px: { xs: 2, md: 20 }, mt: 10 }}>
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

export default Tips;
