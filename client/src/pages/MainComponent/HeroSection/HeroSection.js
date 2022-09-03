import React from "react";
import { Link } from "react-router-dom";

import background from "../../../images/hippo-background.jpg";

import Auth from "../../../utils/auth";

function HeroSection() {
  return (
    <>
      <div style={{ backgroundImage: `url(${background})` }} className="container">
        <h1 className="title is-1 ">Hireable-Hippo-Helper</h1>
        <h2 className="subtitle">We help young pottamus get hired!</h2>
        <a href="learn more" className="button is-white is-medium is-inverted">
          Learn More&ensp;<i className="fad fa-chevron-right"></i>
        </a>
      </div>
      {Auth.loggedIn() ? (
        <>
          <span>Hey there, {Auth.getProfile().data.username}!</span>
        </>
      ) : (
        <div>
          <Link to="/Signup">
            <button type="button">Sign Up!</button>
          </Link>
        </div>
      )}
    </>
  )
};

export default HeroSection;
