import React from "react";
import { Link } from "react-router-dom";
import './colors.css';

const styles = {
  box: {
    height: '100%',
  },
  radii: {
    borderTopLeftRadius: '0',
    borderTopRightRadius: '0',
  },
};

const SideBar = ({ applications }) => {
  return (
    <div className="container column is-one-quarter" style={styles.box} >
      {applications &&
        applications.map((application) => (
          <div key={application._id} className="card mb-2 is-fullwidth ">
            <h6 className="card-header is-size-7 p-1">
              {application.company} ({application.appliedFrom}) 
            </h6>
            <Link
              to={`/Application/${application._id}`}
              state={{ applications: application }}
              className="button is-size-6 is-fullwidth"
              style={styles.radii}
            >
              {application.jobTitle}
            </Link>
          </div>
        ))}

    </div>
  );
};

export default SideBar;
