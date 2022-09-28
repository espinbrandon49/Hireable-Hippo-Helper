import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../../utils/auth";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import "../../../index.css"

const styles = {
  background: {
    height: "100%",
  },
};

function HeroSection() {
  return (
    <div style={styles.background}>
      <div id="background1">
        <div style={{position: "absolute", left: "0"}}>
          <h1 className="title is-1 p-6">Hireable Hippo Helper</h1>
          <h2 className="subtitle pl-6">We help young pottamus get hired!</h2>
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
        </div>
      </div>

      <div id="background2">
        <p>
          Store information on the jobs you have applied to, display job application details on a specific job so that you can always refer to back to the job listing's link and company website, the hiring manager's name and contact information, inportant dates such as interviews, and a description of the job itself.
        </p>
        <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          marginRight: '10%',
          '& > :not(style)': {
            m: 1,
            width: 350,
            height: 350,
          },
        }}
        >
          <Paper elevation={5} />
        </Box>
      </div>

      <div id="background3">
        <div style={{position: "absolute", bottom: "-70%", left: "0"}}>
          <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            position: "absolute",
            marginLeft: '10%',
            bottom: "-100%",
            '& > :not(style)': {
              m: 1,
              width: 350,
              height: 350,
            },
          }}
          >
            <Paper elevation={5} />
          </Box>
          <p>
            Leave a custom note that can be meaningfully documented and organized because the application includes a rich text editor that allows for document customizations including headers, text highlights, bold/italics, and font size changes.
          </p>
        </div>
      </div>

      <div id="background4">
        <p>
          Dynamic visualizations allow one to see the application life cycle evolve in real time which is an analytics tool to zero in on your job search habits, milestones, and key metrics such as number of applied, number of job interviews, days of the week you are most actively searching, etc.
        </p>
        <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          marginRight: '10%',
          '& > :not(style)': {
            m: 1,
            width: 350,
            height: 350,
          },
        }}
        >
          <Paper elevation={5} />
        </Box>
      </div>

    </div>
  );
}

export default HeroSection;
