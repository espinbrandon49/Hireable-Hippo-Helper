import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>
       <img alt="hippo" src="/images/hippoIcon.png"/>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li classNames='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    <body>
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1 ">Hireable-Hippo-Helper</h1>
          <h2 class="subtitle">We help young pottamus get hired!</h2>
          <a href="learn more" class="button is-white is-medium is-inverted">Learn More&ensp;<i class="fad fa-chevron-right"></i></a>
        </div>
      </div>
    </section>
    <section id="parallax-1" class="hero is-large ">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-6 is-offset-6">
              <h1 class="title is-1 ">Lorem Ipsum</h1>
              <hr class="content-divider"/>
              <h2 class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit explicabo amet magni illum eum voluptate! Eveniet voluptatem nam magnam necessitatibus.</h2>
              <a href="button" class="button is-white is-inverted">Next&ensp;<i class="fad fa-chevron-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </body>
    </>
  )
}

export default Homepage
