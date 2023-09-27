import React from 'react';
import BackgroundVideo from './landing';
import '../assests/css/landing.css';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const App1 = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/custom');
  }
  return (
    <div className="app">
      <BackgroundVideo />
      <Button variant="outlined" style={{ color: '#ffffff' ,
    border: '2px solid #000000', // Border color
    '&:hover': {
      backgroundColor: '#00ff00', // Hover background color
      borderColor: '#ff0000', // Hover border color
    },
    }}  className="custom-button" onClick={handleSubmit}>Get Started</Button>
    </div>
  );
};
export default App1;