import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const ApplicationDetails = ({ application, onClose }) => {
  const handleDownloadResume = () => {
    
    window.open(application.resume, '_blank');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2,  padding: 2}}>
      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
        {application.full_name}
      </Typography>
      <Typography variant="body1">
        <strong>Email:</strong> {application.email}
      </Typography>
      <Typography variant="body1">
        <strong>Education:</strong> {application.education}
      </Typography>
      <Typography variant="body1">
        <strong>Experience:</strong> {application.experience} YOE
      </Typography>
      <Typography variant="body1">
        <strong>Cover Letter:</strong> {application.cover_letter}
      </Typography>
      <Button variant="contained" color="primary" onClick={handleDownloadResume}>
        Download Resume
      </Button>
      <Button variant="outlined" color="primary" onClick={onClose}>
        Close
      </Button>
    </Box>
  );
};

export default ApplicationDetails;
