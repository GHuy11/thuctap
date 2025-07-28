import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Menu,
    MenuItem,
    IconButton,
    useMediaQuery,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemButton,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [pagesAnchor, setPagesAnchor] = useState<null | HTMLElement>(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handlePagesHover = (event: React.MouseEvent<HTMLElement>) => {
        setPagesAnchor(event.currentTarget);
    };

    const handleClosePages = () => {
        setPagesAnchor(null);
    };

    const navItems = [
        { label: 'HOME', path: '/' },
        { label: 'OPPORTUNITIES', path: '/opportunities' },
        { label: 'SERVICES', path: '/services' },
        { label: 'ABOUT', path: '/about' },
    ];

    return (
        <>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Left: Logo */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <Box
                            sx={{
                                width: 32,
                                height: 32,
                                borderRadius: '50%',
                                backgroundColor: '#2c3e50',
                            }}
                        />

                        {/* Desktop Menu */}
                        {!isMobile && (
                            <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                                {/* Dropdown PAGES */}
                                <Box
                                    onMouseEnter={handlePagesHover}
                                    onMouseLeave={handleClosePages}
                                    sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                                >
                                    <Typography variant="body1">PAGES</Typography>
                                    <ArrowDropDownIcon />
                                    <Menu
                                        anchorEl={pagesAnchor}
                                        open={Boolean(pagesAnchor)}
                                        onClose={handleClosePages}
                                        MenuListProps={{ onMouseLeave: handleClosePages }}
                                    >
                                        <MenuItem onClick={handleClosePages} component={Link} to="/page1">
                                            Page 1
                                        </MenuItem>
                                        <MenuItem onClick={handleClosePages} component={Link} to="/page2">
                                            Page 2
                                        </MenuItem>
                                    </Menu>
                                </Box>

                                {/* Other nav items */}
                                {navItems.map((item) => (
                                    <Typography
                                        key={item.label}
                                        variant="body1"
                                        component={Link}
                                        to={item.path}
                                        sx={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                            '&:hover': { color: '#1976d2' },
                                        }}
                                    >
                                        {item.label}
                                    </Typography>
                                ))}
                            </Box>
                        )}
                    </Box>

                    {/* Right: Menu icon on Mobile */}
                    {isMobile && (
                        <IconButton edge="end" onClick={() => setDrawerOpen(true)}>
                            <MenuIcon />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>

            {/* Drawer Menu on Mobile */}
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <Box sx={{ width: 250 }} role="presentation">
                    <List>
                        {navItems.map((item) => (
                            <ListItem disablePadding key={item.label}>
                                <ListItemButton component={Link} to={item.path} onClick={() => setDrawerOpen(false)}>
                                    <ListItemText primary={item.label} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>

        </>
    );
};

export default Header;
