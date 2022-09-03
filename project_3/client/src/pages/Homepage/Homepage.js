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
    
  
        <div class="container">
          <h1 class="title is-1 ">Hireable-Hippo-Helper</h1>
          <h2 class="subtitle">We help young pottamus get hired!</h2>
          <a href="learn more" class="button is-white is-medium is-inverted">Learn More&ensp;<i class="fad fa-chevron-right"></i></a>
        </div>
    
    </body>
    </>
  )
}

export default Homepage
