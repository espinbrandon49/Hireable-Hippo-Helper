import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import '../../index.css'
import Container from '@mui/material/Container';

const Homepage = () => {
  return (
    <Container id="homepage" maxWidth={false}>
      <HeroSection/>
    </Container>
  )
}

export default Homepage;
