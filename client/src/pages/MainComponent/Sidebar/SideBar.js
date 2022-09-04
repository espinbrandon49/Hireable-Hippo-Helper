import React from "react";
import { Link } from "react-router-dom";

const styles = {
  box: {
    height: '100%',
  },
};

const SideBar = ({applications}) => {
  return (
    <div className="column is-one-quarter">
      <div className="box" style={styles.box}>
        {applications &&
          applications.map((application) => (
            <div key={application._id} className="card mb-2">
              {/* <h4 className="card-header bg-primary text-light is-size-6 m-0">
                {application.applicant} <br />
              </h4> */}
              <div>
                <h6 className="card-header is-size-6 p-1">
                  {application.company} ({application.appliedFrom})
                </h6>
                <Link
                  to={`/Application/${application._id}`}
                  state={{ applications: application}}
                  className="button is-size-4 is-fullwidth"
                >
                  {application.jobTitle}
                </Link>
              </div>

              {/* <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/userApps/${application._id}`}
              >
              Join the discussion on this application.
              </Link> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SideBar;
