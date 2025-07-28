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
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const Home = () => {

    const boxContent: { title: string; image: string }[] = [
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
    ];
    return (
        <Box sx={{
            px: { xs: 2, md: 8 }, py: { xs: 4, md: 2 }, width: '100%', maxWidth: {
                xs: '90%',       // ≤600px (iPhone)
                sm: '90%',        // 600–899px (Tablet như Galaxy Tab A7)
                md: '1100px',     // ≥900px (Laptop)
            }
            , mx: 'auto'
        }}>
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
                        xs: 2,
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
                {/* Left Side */}
                <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                    <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}>
                        Investing <br /> Simplified
                    </Typography>

                    <Typography
                        variant="body1"
                        color="text.secondary"
                        mb={4}
                        sx={{ fontSize: { xs: '0.9rem', sm: '1rem' }, px: { xs: 1, sm: 2, md: 0 } }}
                    >
                        Take command of your financial future and transcend to the life you've always envisioned.
                        Unleash potential and master the art of investment with unparalleled ease and precision.
                    </Typography>

                    <Paper
                        elevation={3}
                        sx={{
                            p: { xs: 2, sm: 3 },
                            borderRadius: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            maxWidth: 500,
                            mx: { xs: 'auto', md: 0 },
                            backgroundColor: '#f2f4f8',
                        }}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Typography variant="h6" color="primary">★</Typography>
                                <Typography variant="h6">4.9</Typography>
                            </Box>
                            <Button variant="contained" sx={{ mt: { xs: 2, sm: 0 } }}>
                                Get Started
                            </Button>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                            <Box sx={{ maxWidth: 380 }}>
                                <Typography fontWeight="bold" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                                    Discover a World of Investment Opportunities: Start Growing Your Wealth Now
                                </Typography>
                            </Box>

                            <IconButton sx={{ bgcolor: 'primary.main', color: 'white', ml: 2, mt: { xs: 2, sm: 0 } }}>
                                <PlayArrowIcon />
                            </IconButton>
                        </Box>
                    </Paper>
                </Box>

                {/* Right Side */}
                <Box sx={{ flex: 1, position: 'relative', textAlign: 'center', mt: { xs: 4, sm: 4, md: 0 } }}>
                    <img
                        src="/images/Rectangle.png"
                        alt="Man on phone"
                        style={{ borderRadius: '8px', width: '100%', maxWidth: 450 }}
                    />
                    <Box
                        sx={{
                            maxWidth: '50%',
                            position: 'absolute',
                            bottom: 20,
                            right: 80,
                            display: { xs: 'none', sm: 'none', md: 'block' },
                        }}
                    >
                        <img src="/images/Frame 206.png" alt="" style={{ width: '100%' }} />
                    </Box>
                </Box>
            </Box>

            <Box sx={{ mt: 10, px: { xs: 2, sm: 4, md: 20 } }}>
                {/* Heading + Description */}
                <Box
                    sx={{
                        display: { xs: 'block', md: 'flex', },
                        justifyContent: "space-between",
                        alignItems: 'center',
                        textAlign: { xs: 'center', md: 'left' },
                        gap: { xs: 2, md: 4 },
                    }}
                >
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        sx={{
                            textAlign: { xs: 'center', sm: 'center', md: 'left' },
                            mb: { xs: 2, sm: 3, md: 4 },
                        }}
                    >
                        Explore Recent <br /> Opportunities
                    </Typography>

                    <Box sx={{ textAlign: { xs: 'center', md: 'left' }, px: { xs: 1, sm: 2, md: 0 } }}>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ maxWidth: 500, mx: { xs: 'auto', md: 0 } }}
                        >
                            Unlock a Universe of Investment Opportunities.<br />
                            Step into a realm where growth and opportunity converge.
                            Our innovative platform opens doors to a curated selection of high-potential investments.
                        </Typography>
                        <Button sx={{ mt: 2 }} endIcon={<PlayArrowIcon />}>
                            Learn More
                        </Button>
                    </Box>
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
                                width: {
                                    xs: '100%',
                                    sm: 'calc(45% - 12px)',
                                    md: 'calc(47% - 18px)',
                                },
                                // mx:'auto',

                                borderRadius: 3,
                                p: 2,
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                gap: 2,
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
                                    height: { xs: 180, md: 200 },
                                    objectFit: 'cover',
                                }}
                            />
                            <Box sx={{ flex: 1, mt: { xs: 2, md: 0 } }}>
                                <Typography variant="h6" fontWeight={700} fontSize={16}>
                                    {item.title}
                                </Typography>
                                <Box mt={1} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <MonetizationOnIcon sx={{ fontSize: 15 }} />
                                        <Typography variant="body2" color="text.secondary">
                                            Valuation $5M
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <PeopleIcon sx={{ fontSize: 15 }} />
                                        <Typography variant="body2" color="text.secondary">
                                            75 Investors
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <TrackChangesIcon sx={{ fontSize: 15 }} />
                                        <Typography variant="body2" color="text.secondary">
                                            Target $500,000
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <LocationOnIcon sx={{ fontSize: 15 }} />
                                        <Typography variant="body2" color="text.secondary">
                                            London, UK
                                        </Typography>
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
                            Fortify Your Financial Horizon
                        </Typography>

                        <Box sx={{ maxWidth: { xs: '100%', md: '50%' } }}>
                            <Typography color="text.secondary" sx={{ mb: 2 }}>
                                Embark on a transformative journey that guarantees to elevate your
                                economic stature through strategic investment opportunities.
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
                                Live Market Insights
                            </Typography>
                            <Typography variant="body2" color="text.secondary" >
                                Gain an edge with real-time updates and expert analyses
                            </Typography>
                        </Box>
                        <Box sx={{ maxWidth: { xs: '100%', md: 200 } }}>
                            <Box sx={{ width: 2, height: 2, backgroundColor: '#355070', p: 2, borderRadius: '10px', mb: 2, mx: { xs: 'auto', md: 0 } }}></Box>
                            <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
                                Ventures Across Diverse Industries
                            </Typography>
                            <Typography variant="body2" color="text.secondary" >
                                Step into a variety of sectors, each offering unique and lucrative
                            </Typography>
                        </Box>
                        <Box sx={{ maxWidth: { xs: '100%', md: 220 } }}>
                            <Box sx={{ width: 2, height: 2, backgroundColor: '#355070', p: 2, borderRadius: '10px', mb: 2, mx: { xs: 'auto', md: 0 } }}></Box>
                            <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
                                Revolutionary Investment Solutions
                            </Typography>
                            <Typography variant="body2" color="text.secondary" >
                                Harness the power of ground breaking strategies and tools
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

                <Box sx={{ maxWidth: { md: 244 }, mb: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', gap: 3 }}>
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

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 4,
                    px: { xs: 2, md: 20 },
                    mt: 10,
                }}
            >
                <Paper
                    elevation={0}
                    sx={{
                        flex: 1,
                        backgroundColor: '#f2f4f8',
                        borderRadius: 4,
                        p: 4,
                        position: 'relative', minHeight: 300
                    }}
                >
                    <Typography variant="h5" fontWeight="bold" gutterBottom >
                        Meet Our Visionary <br /> Founder
                    </Typography>
                    <Box sx={{ position: 'absolute', bottom: 10, maxWidth: '82%' }}>
                        <Typography variant="body1" sx={{ mb: 4 }}>
                            "Led by our expert team of financial strategists, we are dedicated to propelling you toward exceptional financial achievements"
                        </Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 4 }}>
                            <Box
                                sx={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: '50%',
                                    backgroundColor: '#ccc',
                                    mr: 2,
                                }}
                            />
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

                <Paper
                    elevation={0}
                    sx={{
                        flex: 1,
                        backgroundColor: '#f2f4f8',
                        borderRadius: 4,
                        p: 2,
                    }}
                >


                    {[
                        "What exclusive services do we provide?",
                        "Which global areas do we influence",
                        "What innovative property investments do we offer?",
                        "How can you initiate a consultation?",
                        "Lorem Ipsum is simply dummy text of the printing",
                    ].map((question, index) => (
                        <Accordion key={index} TransitionProps={{ unmountOnExit: true }} sx={{ backgroundColor: '#f2f4f8', boxShadow: 'none' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography fontWeight="bold">{question}?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Paper>

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


        </Box >
    );
};

export default Home;
