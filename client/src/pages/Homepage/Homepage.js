import React from 'react';
import HeroSection from '../MainComponent/HeroSection/HeroSection';
import background from "../../images/hippo-background.jpg";
import NavTabs from '../NavBar';

const Homepage = () => {
  return (
    <>
    <NavTabs/>
     <div style={{ backgroundImage: `url(${background})`, height: '100%', width: '100%', backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
    <HeroSection/>
    </div>
    </>
  )
}

export default Homepage;
