import React from 'react'
import { useMutation } from '@apollo/client';
import { UPDATE_MILESTONE, ADD_MILESTONE } from '../../../../utils/mutations';

const CurrentMilestone = ({ application }) => {

  const [updateMilestone, { error, data }] = useMutation(UPDATE_MILESTONE);
  const [addMilestone, { err, dataA }] = useMutation(ADD_MILESTONE);
  // console.log(error, err, data, dataA)

  const submitMilestone = async (event) => {
    event.preventDefault();
    const currentMilestone = event.target.value;
    const milestones = event.target.value
 
    try {
      await updateMilestone({
        variables: { _id: application._id, currentMilestone: currentMilestone },
      });
      await addMilestone({
        variables: { _id: application._id, milestones: [milestones] },
      });
    } catch (err) {
      console.error(err);
    }  
  }

  if (application._id !== undefined) {
    return (
      <div className='box'>
      <div className="buttons is-justify-content-center">
          <button
            className={
              application._id
              ? application.currentMilestone === "Applied"
                ? 'button is-primary'
                : 'button is-info'
              : 'button is-info'
            }
            value={"Applied"}
            onClick={submitMilestone}
          >
            Applied
          </button>
          <button
            className={
              application._id
              ? application.currentMilestone === "Phone Interview"
                ? 'button is-link'
                : 'button is-info'
              : 'button is-info'
            }
            value={"Phone Interview"}
            onClick={submitMilestone}
          >
            Phone Interview
          </button>
          <button
            className={
              application._id
              ? application.currentMilestone === "Technical Interview"
                ? 'button is-link'
                : 'button is-info'
              : 'button is-info'
            }
            value={"Technical Interview"}
            onClick={submitMilestone}
          >
            Technical Interview
          </button>
  
          <button
            className={
              application._id
              ? application.currentMilestone === "In Person Interview"
                ? 'button is-link'
                : 'button is-info'
              : 'button is-info'
            }
            value={"In Person Interview"}
            onClick={submitMilestone}
          >
            In Person Interview
          </button>
          <button
            className={
              application._id
              ? application.currentMilestone === "Job Offer"
                ? 'button is-success'
                : 'button is-info'
              : 'button is-info'
            }
            value={"Job Offer"}
            onClick={submitMilestone}
          >
            Job Offer
          </button>
          <button
            className={
              application._id
              ? application.currentMilestone === "Accepted"
                ? 'button is-success'
                : 'button is-info'
              : 'button is-info'
            }
            value={"Accepted"}
            onClick={submitMilestone}
          >
            Accepted
          </button>
          <button
            className={
              application._id
              ? application.currentMilestone === "Rejected"
                ? 'button is-danger'
                : 'button is-info'
              : 'button is-info'
            }
            value={"Rejected"}
            onClick={submitMilestone}
          >
            Rejected
          </button>
        </div>
      </div>
    )
  } else {
    return(
      <></>
    )
  }
 
}

export default CurrentMilestone
