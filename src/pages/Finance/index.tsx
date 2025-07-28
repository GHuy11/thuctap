import React from 'react';
import {
    Box,
    Typography,
    Button,
    Paper,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PeopleIcon from '@mui/icons-material/People';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const Finance = () => {

    const boxContent: { title: string; image: string }[] = [
        {
            title: 'International Art Museum',
            image: '/images/Rectangle1.png',
        },
        {
            title: 'Web Application Investment Program',
            image: '/images/Rectangle 9.png',
        },
    ];


    const Ask: { ask: string; answer: string }[] = [
        {
            ask: 'Lorem Ipsum is simply dummy text of the printing',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar ',
        },
        {
            ask: 'Lorem Ipsum is simply dummy text of the printing',
            answer: '123',
        }, {
            ask: 'Lorem Ipsum is simply dummy text of the printing',
            answer: '123',
        }, {
            ask: 'Lorem Ipsum is simply dummy text of the printing',
            answer: '123',
        }, {
            ask: 'Lorem Ipsum is simply dummy text of the printing',
            answer: '123',
        },
    ];

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
                        Finance Program
                    </Typography>
                    <Typography variant="body1" color="text.secondary" mb={4}>
                        Seize the opportunity to control your financial destiny and live the life you've always envisioned.
                    </Typography>
                </Box>

                <Box sx={{ flex: 1, position: 'relative', textAlign: 'center' }}>
                    <img
                        src="/images/Rectangle 2.png"
                        alt="Man on phone"
                        style={{ borderRadius: '8px', width: '100%', maxWidth: 450 }}
                    />
                </Box>
            </Box>
            <Box
                sx={{
                    mt: 10,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 4,
                    alignItems: 'flex-start',
                    px: { xs: 2, md: 20 },
                }}
            >
                {/* Left Section: Text description */}
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                        Your Path to Financial Freedom Begins Here
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Embark on a journey to financial independence with a program designed to equip you
                        with the necessary tools and knowledge. Our approach is grounded in understanding
                        your unique financial goals and providing tailored strategies to meet them.
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        Every step you take with us is a move towards greater financial literacy and freedom.
                        We guide you through complex financial landscapes, ensuring you make informed decisions
                        that align with your long-term objectives.
                    </Typography>
                    <Box
                        component='img'
                        alt=''
                        src='images/Rectangle 7.png'
                        sx={{
                            borderRadius: '12px',
                            width: '100%',
                            height: 200,
                            objectFit: 'cover',
                            marginTop: 2
                        }}
                    />
                    <Typography variant='body2' color='text.secondary'>
                        Service Offerings: Elevating Your Investment Experience We provide a diverse range of
                        services tailored to enhance your financial acumen and investment capabilities:
                    </Typography>
                    {Ask.map((i, index) => (
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography fontWeight='bold'>
                                    {i.ask}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body2" color="text.secondary">
                                    {i.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}

                </Box>


                <Box>
                    <Paper
                        // elevation={2}
                        sx={{
                            flex: 1,
                            borderRadius: 3,
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            maxWidth: 250,
                        }}
                    >
                        <Box
                            component="img"
                            src="/images/Rectangle 3.png"
                            alt="Money"
                            sx={{ width: '100%', borderRadius: 2, objectFit: 'cover' }}
                        />

                        <Box>
                            <Typography variant="h6" fontWeight="bold" gutterBottom>
                                Investment Details
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                <MonetizationOnIcon sx={{ fontSize: 16 }} />
                                <Typography variant="body2" color="text.secondary">Valuation $5M</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                <PeopleIcon sx={{ fontSize: 16 }} />
                                <Typography variant="body2" color="text.secondary">75 Investors</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                <TrackChangesIcon sx={{ fontSize: 16 }} />
                                <Typography variant="body2" color="text.secondary">Target $500,000</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <LocationOnIcon sx={{ fontSize: 16 }} />
                                <Typography variant="body2" color="text.secondary">London, UK</Typography>
                            </Box>
                        </Box>

                        <Button
                            variant="contained"
                            size="medium"
                            sx={{
                                backgroundColor: '#304966',
                                '&:hover': { backgroundColor: '#162e6f' },
                                borderRadius: '20px',
                                mt: 2,
                                alignSelf: 'center',
                                px: 4,
                            }}
                        >
                            GET STARTED
                        </Button>
                    </Paper>
                    <Paper
                        // elevation={2}    
                        sx={{
                            flex: 1,
                            borderRadius: 3,
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            maxWidth: 250,
                            mt: 2
                        }}
                    >
                        <Box
                            sx={{
                                alignItems: 'center',
                                gap: 2,
                            }}
                        >
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="body2" color="text.secondary">
                                    Led by our expert team of financial strategists, we are dedicated to propelling you toward exceptional financial achievements.
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <Box sx={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: '#ccc' }} />
                                <Box>
                                    <Typography variant="subtitle2" fontWeight="bold">
                                        JOHN DOE
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        Founder
                                    </Typography>
                                </Box>
                            </Box>

                        </Box>
                    </Paper>
                </Box>
            </Box>


            <Box sx={{ mt: 10, px: { xs: 2, md: 20 } }}>
                <Box sx={{ textAlign: 'center' }}>
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
                        Opportunities
                    </Typography>
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        Invest Wisely Today
                    </Typography>
                </Box>
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

export default Finance;
