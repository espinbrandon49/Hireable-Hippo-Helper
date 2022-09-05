import React from 'react';
import HeroSection from '../MainComponent/HeroSection/HeroSection';
import background from "../../images/hippo-background.jpg";

const Homepage = () => {
  return (
    <>


    
     <div style={{ backgroundImage: `url(${background})` }}>
    <HeroSection/>

    </div>
   
  
 
    </>
  )
}

export default Homepage;
