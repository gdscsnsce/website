
import React from 'react';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import { ErrorBoundary, CoralflowHero } from '@/components/client';
import Image from 'next/image';
import HeroImage from '@/assets/notgpl/tech.png'; 
import SwagImage from '@/assets/notgpl/swags.png';
 

const GenAITrainingPage = () => {
  return (
	<main id="home">
	<CoralflowHero/>
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h2" component="h1" gutterBottom>
              Intensive Gen AI Training Program
            </Typography>
            <Typography variant="h5" gutterBottom>
              Master the Latest AI Techniques in 20 Days!
            </Typography>
            <Typography variant="body1" paragraph>
              Join our immersive program and unlock the potential of Generative AI. Learn Python, Machine Learning, Deep Learning, and explore cutting-edge tools like Stable Diffusion, Ollama, and Gemini. 
            </Typography>
            <Button variant="contained" color="primary" href="https://forms.gle/TeXJmeFWn1SA83vy8">
              Register Now!
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* <img src={HeroImage} alt="Gen AI Training" width="100%" />  */}
		  <Image
			src={HeroImage}
			alt="Tech"
			draggable="false"
			width={600}
			height={200}
				/>
        </Grid>
      </Grid>

      {/* Curriculum Highlights */}
      <Grid container spacing={3} mt={5}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            What You Will Learn
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" align="center">Python for AI</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" align="center">Machine Learning & Deep Learning</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" align="center">NLP & Generative AI</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" align="center">Advanced Tools & Techniques</Typography>
        </Grid>
      </Grid>

      {/* Benefits and Swag */}
      <Grid container spacing={3} mt={5} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
		<Image
			src={SwagImage}
			alt="Gen AI Swag"
			draggable="false"
			width={600}
			height={200}
				/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4" gutterBottom>Why Choose Our Program?</Typography>
            <ul>
              <li>Expert-led sessions and personalized mentorship</li>
              <li>Hands-on learning with coding assessments and projects</li>
              <li>Comprehensive curriculum covering theory and applications</li>
              <li>Exclusive swag including a T-shirt and flask</li>
              <li>Certification upon completion</li>
              <li>Capstone project to showcase your skills</li>
            </ul>
          </Box>
        </Grid>
      </Grid>

      {/* Call to Action */}
      <Grid container spacing={3} mt={5} justifyContent="center">
        <Grid item xs={12} md={8} align="center">
          <Typography variant="h5" gutterBottom>
            Empower Your Future with Gen AI!
          </Typography>
          <Button variant="contained" color="primary" size="large" href="https://forms.gle/TeXJmeFWn1SA83vy8">
            Register Now and Secure Your Spot!
          </Button>
        </Grid>
      </Grid>
    </Container>

	<Grid container spacing={5} mt={5} justifyContent="center"></Grid>
	  </main>
  );
};

export default GenAITrainingPage;
