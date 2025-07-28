import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        bgcolor: '#f8f8f8',
        textAlign: 'center',
        px: 2,
      }}
    >
      <ErrorOutlineIcon sx={{ fontSize: 80, color: '#d32f2f' }} />
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        The page you’re looking for doesn’t exist or has been moved.
      </Typography>
      <Button
        variant="contained"
        sx={{ borderRadius: '999px', px: 4 }}
        onClick={() => navigate('/')}
      >
        Go to Homepage
      </Button>
    </Box>
  );
};

export default NotFound;
