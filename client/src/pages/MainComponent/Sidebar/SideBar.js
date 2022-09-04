import React from "react";

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
              <h4 className="card-header bg-primary text-light is-size-6 m-0">
                {application.applicant} <br />
              </h4>
              <div>
                <h6 className="card-header bg-primary text-light is-size-6 m-0">
                  {application.appliedFrom} <br />
                </h6>
                <h6 className="card-header bg-primary text-light is-size-4 m-0">
                  {application.jobDescription} <br />
                </h6>
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
