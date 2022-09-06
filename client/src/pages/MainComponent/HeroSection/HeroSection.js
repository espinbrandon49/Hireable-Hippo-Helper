import React from "react";
import { Link } from "react-router-dom";
import background from "../../../images/hippo-background.jpg";

import Auth from "../../../utils/auth";

function HeroSection() {
  return (
    <>
      <div className="container is-vcentered p-0 m-0" style={{height: "40%"}}>
        <h1 className="title is-1 p-6">Hireable-Hippo-Helper</h1>
        <h2 className="subtitle pl-6">We help young pottamus get hired!</h2>
      </div>
      {Auth.loggedIn() ? (
        <>
          <span className="subtitle" style={{paddingLeft: "20%"}}>Hey there, {Auth.getProfile().data.username}!</span>
        </>
      ) : (
        <div style={{paddingLeft: "20%", paddingBottom: "10px"}}>
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
      <div style={{paddingLeft: "20%"}}>Fun Hippo Fact</div>
    </>
  );
}

export default HeroSection;
