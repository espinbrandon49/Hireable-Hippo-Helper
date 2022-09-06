import React from 'react';
import HeroSection from '../MainComponent/HeroSection/HeroSection';
import background from "../../images/hippo-background.jpg";

const Homepage = () => {
  return (
    <>


    
     <div style={{ backgroundImage: `url(${background})`, height: '100%', width: '100%', backgroundRepeat:"no-repeat", backgroundSize:"contain" }}>
    <HeroSection/>

    </div>
   
  
 
    </>
  )
}

export default Homepage;
