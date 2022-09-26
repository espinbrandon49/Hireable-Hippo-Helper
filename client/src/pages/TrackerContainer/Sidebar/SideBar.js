import React from "react";
import { Link } from "react-router-dom";
import './colors.css';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const styles = {
  box: {
    height: '100%',
  },
  btn: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  }
};

const SideBar = ({ applications }) => {
  return (
    <div className="container column is-one-quarter" style={styles.box} >
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

    </div>
  );
};

export default SideBar;
