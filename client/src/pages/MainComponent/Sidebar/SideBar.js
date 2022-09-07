import React from "react";
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";

const styles = {
  box: {
    height: '100%',
  },
  radii: {
    borderTopLeftRadius: '0',
    borderTopRightRadius: '0',
  }
};

const SideBar = ({ applications }) => {
  
  let classCode;
  const { _id } = useParams();
  console.log(_id)

  if (!_id) {
    classCode = "is-link"
  } else {
    let application = applications.filter((application) => application._id === _id)[0];

    function classCodes () {
      if (application.currentMilestone !== undefined) {
        const color = application.currentMilestone
        switch (color) {
          case "Applied":
            classCode = " is-primary";
            break;
          case "Phone Interview":
            classCode = " is-link";
            break;
          case "Technical Interview":
            classCode = " is-info";
            break;
          case "Job Offer":
            classCode = " is-warning";
            break;
          case "Accepted":
            classCode = " is-success";
            break;
          case "Rejected":
            classCode = " is-danger";
            break;
          default:
            classCode = " is-light";
        }
      }
    }

  }
  return (
    <div className="container column is-one-quarter" style={styles.box} >
      {applications &&
        applications.map((application) => (
          <div key={application._id} className="card mb-2 is-fullwidth ">
            {/* <h4 className="card-header bg-primary text-light is-size-6 m-0">
                {application.applicant} <br />
              </h4> */}
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
