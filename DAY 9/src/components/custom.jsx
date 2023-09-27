import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { AppBar, Toolbar, Container } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import video from '../pictures/Step_1.mp4';
import video1 from '../pictures/Step_2.mp4';
import video2 from '../pictures/Step_3.mp4';
import '../assests/css/custom.css';

const Custom = () => {
  const [backgroundColor] = useState('#ffffff'); // Initial background color is white
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/custompage');
  };

  return (
    <div style={{ backgroundColor, minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Customizable Perfume Website</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <h1>Welcome to our perfume website!</h1>
        <p>Customize your experience:</p>
        <br />
        <br />
        <br />
        <div style={{ display: 'flex' }}>
          <Card sx={{ maxWidth: 345, marginRight: '100px' }}>
            <CardActionArea>
              <video width="320" height="240" loop muted playsInline autoPlay className="step1">
                <source src={video} type="video/mp4" />
              </video>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Step 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Choose the flavors
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345, marginRight: '100px' }}>
            <CardActionArea>
              <video width="320" height="240" loop muted playsInline autoPlay className="step1">
                <source src={video1} type="video/mp4" />
              </video>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Step 2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Mix the selected flavors
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345, marginRight: '100px' }}>
            <CardActionArea>
              <video width="320" height="240" loop muted playsInline autoPlay className="step1">
                <source src={video2} type="video/mp4" />
              </video>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Step 3
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  See the Output and buy it
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          {/* Repeat the same structure for Step 2 and Step 3 */}
          
        </div>
        <br />
        <br />
        <br />
        <center>
          <Button variant="contained" color="success" onClick={handleNext}>
            Get Started
          </Button>
        </center>
      </Container>
    </div>
  );
};

export default Custom;
