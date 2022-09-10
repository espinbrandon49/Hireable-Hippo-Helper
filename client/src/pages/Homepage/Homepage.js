import React from 'react';
import HeroSection from '../MainComponent/HeroSection/HeroSection';
import background from "../../images/hippo-background.jpg";
// import NavBar from '../NavBar';
import NavBar from '../Navbar';

const Homepage = () => {
  return (
    <>
    <NavBar/>
     <div style={{ backgroundImage: `url(${background})`, height: '100%', width: '100%', backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
    <HeroSection/>
    </div>
    </>
  )
}

export default Homepage;
