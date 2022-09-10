import React from 'react'
import { useMutation } from '@apollo/client';
import { UPDATE_MILESTONE, ADD_MILESTONE } from '../../../../utils/mutations';
import { useParams } from 'react-router-dom';

const CurrentMilestone = ({applications}) => {
  let application;
  const { _id } = useParams();

  const [updateMilestone, { error, data }] = useMutation(UPDATE_MILESTONE);
  const [addMilestone, { err, dataA }] = useMutation(ADD_MILESTONE);
console.log(error, err, data, dataA)

  if (_id) {
    application = applications.filter((application) => application._id === _id)[0];
  } 

  const submitMilestone = async (event) => {
    event.preventDefault();
    const currentMilestone = event.target.value;
    const milestones = event.target.value
 
    try {
      await updateMilestone({
        variables: { _id: _id, currentMilestone: currentMilestone },
      });
      await addMilestone({
        variables: { _id: _id, milestones: [milestones] },
      });
    } catch (err) {
      console.error(err);
    }  
  }
  return (
    <div className='box'>
    <div className="buttons is-justify-content-center">
        <button
          className={
            _id
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
            _id
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
            _id
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
            _id
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
            _id
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
            _id
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
            _id
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
}

export default CurrentMilestone
