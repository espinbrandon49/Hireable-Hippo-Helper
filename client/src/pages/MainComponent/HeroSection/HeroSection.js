import React from "react";
import { Link } from "react-router-dom";
import background from "../../../images/hippo-background.jpg";

import Auth from "../../../utils/auth";

function HeroSection() {
  return (
    <>
      <div className="container">
        <h1 className="title is-1 ">Hireable-Hippo-Helper</h1>
        <h2 className="subtitle">We help young pottamus get hired!</h2>
      </div>
      {Auth.loggedIn() ? (
        <>
          <span>Hey there, {Auth.getProfile().data.username}!</span>
        </>
      ) : (
        <div>
          <Link to="/Signup">
            <button
              className="button is-info"
              style={{ cursor: "pointer" }}
              type="button"
            >
              Sign Up!
            </button>
          </Link>
        </div>
      )}
      <div>Fun Hippo Fact</div>
    </>
  );
}

export default HeroSection;
