import React from 'react';
import {Button} from './Button';

function HeroSection() {
    return (
        <body>
        <div className='hero-container'>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize="btn--large">
                    GET STARTED
                </Button>
            </div>
        </div>
        
    
  
            <div className="container">
              <h1 className="title is-1 ">Hireable-Hippo-Helper</h1>
              <h2 className="subtitle">We help young pottamus get hired!</h2>
              <a href="learn more" class="button is-white is-medium is-inverted">Learn More&ensp;<i className="fad fa-chevron-right"></i></a>
            </div>
        
        </body>
    )

}

export default HeroSection