import React from "react";
import { Link } from "react-router-dom";
import './colors.css';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const styles = {
  box: {
    marginTop: '90px',
    height: '100%',

  },
  scroll: {
    maxHeight: '100vh',
    overflow: 'auto',
    padding: 8,
  },
  btn: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundImage: "linear-gradient( 180deg, rgb(80, 190, 250), rgb(70, 170, 220) )",
    border: "grey",
  }
};

const SideBar = ({ applications }) => {
  return (
    <Card className="container column is-one-quarter" elevation={5} style={styles.box} >
      <Typography variant="h5" component="div" className="pb-3">
        My Applications
      </Typography>
      <Card style={styles.scroll} elevation={0}>
        {applications &&
        applications.map((application) => (
          <Card key={application._id} elevation={4} className="mb-3">
            <Typography variant="h6" className="p-1 pl-2">
              {application.company} ({application.appliedFrom}) 
            </Typography>
            <Link
              to={`/Main/Application/${application._id}`}
              state={ application }
              className="button is-fullwidth"
              style={styles.btn}
            >
              <Typography sx={{ fontSize: 18 }}>
                {application.jobTitle}
              </Typography>
            </Link>
          </Card>
        ))}
      </Card>


    </Card>
  );
};

export default SideBar;
