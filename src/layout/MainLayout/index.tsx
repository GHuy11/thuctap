import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
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


function MainLayout() {
  return (
    <div id="container">
      <header className='header'>
        <Header />
      </header>
      <Box sx={{
        px: { xs: 2, md: 8 }, py: { xs: 4, md: 2 }, width: '100%', maxWidth: {
          xs: '90%',       // ≤600px (iPhone)
          sm: '90%',        // 600–899px (Tablet như Galaxy Tab A7)
          md: '1100px',     // ≥900px (Laptop)
        }
        , mx: 'auto'
      }}>
        <Outlet />
      </Box>
      <Footer />
    </div>
  );
}

export default MainLayout;
