import React from 'react'
import { useMutation } from '@apollo/client';
import { UPDATE_MILESTONE } from '../../../../utils/mutations';
import { useParams } from 'react-router-dom';

const styles = {
  width: {
    maxWidth: "120px",
    minWidth: "120px",
  },
};

const CurrentMilestone = ({applications}) => {

  const { _id } = useParams();

  const [updateMilestone, { error, data }] = useMutation(UPDATE_MILESTONE);

  const application = applications.filter((application) => application._id === _id)[0];

  const submitMilestone = async (event) => {
    event.preventDefault();

    const currentMilestone = event.target.value;

    // console.log(_id, currentMilestone);
    // console.log(event.target.value);
 
    try {
      // console.log(_id, currentMilestone)
      await updateMilestone({
        variables: { _id: _id, currentMilestone: currentMilestone },
      });
      console.log(updateMilestone)
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className='column'>
      <div className='box columns my-2'>
        <button
          className={
            _id
            ? application.currentMilestone === "Applied"
              ? 'button is-rounded is-link column py-6 mx-5 my-2'
              : 'button is-rounded is-info column py-6 mx-5 my-2'
            : 'button is-rounded is-info column py-6 mx-5 my-2'
          }
          style={styles.width}
          value={"Applied"}
          onClick={submitMilestone}
        >
          Applied
        </button>
        <button
          className={
            _id
            ? application.currentMilestone === "Phone Interview"
              ? 'button is-rounded is-link column py-6 mx-5 my-2'
              : 'button is-rounded is-info column py-6 mx-5 my-2'
            : 'button is-rounded is-info column py-6 mx-5 my-2'
          }
          style={styles.width}
          value={"Phone Interview"}
          onClick={submitMilestone}
        >
          Phone Interview
        </button>
        <button
          className={
            _id
            ? application.currentMilestone === "Technical Interview"
              ? 'button is-rounded is-link column py-6 mx-5 my-2'
              : 'button is-rounded is-info column py-6 mx-5 my-2'
            : 'button is-rounded is-info column py-6 mx-5 my-2'
          }
          style={styles.width}
          value={"Technical Interview"}
          onClick={submitMilestone}
        >
          Technical Interview
        </button>
        <button
          className={
            _id
            ? application.currentMilestone === "In Person Interview"
              ? 'button is-rounded is-link column py-6 mx-5 my-2'
              : 'button is-rounded is-info column py-6 mx-5 my-2'
            : 'button is-rounded is-info column py-6 mx-5 my-2'
          }
          style={styles.width}
          value={"In Person Interview"}
          onClick={submitMilestone}
        >
          In Person Interview
        </button>
        <button
          className={
            _id
            ? application.currentMilestone === "Job Offer"
              ? 'button is-rounded is-link column py-6 mx-5 my-2'
              : 'button is-rounded is-info column py-6 mx-5 my-2'
            : 'button is-rounded is-info column py-6 mx-5 my-2'
          }
          style={styles.width}
          value={"Job Offer"}
          onClick={submitMilestone}
        >
          Job Offer
        </button>
        <button
          className={
            _id
            ? application.currentMilestone === "Accepted"
              ? 'button is-rounded is-link column py-6 mx-5 my-2'
              : 'button is-rounded is-info column py-6 mx-5 my-2'
            : 'button is-rounded is-info column py-6 mx-5 my-2'
          }
          style={styles.width}
          value={"Accepted"}
          onClick={submitMilestone}
        >
          Accepted
        </button>
        <button
          className={
            _id
            ? application.currentMilestone === "Rejected"
              ? 'button is-rounded is-link column py-6 mx-5 my-2'
              : 'button is-rounded is-info column py-6 mx-5 my-2'
            : 'button is-rounded is-info column py-6 mx-5 my-2'
          }
          style={styles.width}
          value={"Rejected"}
          onClick={submitMilestone}
        >
          Rejected
        </button>
        <button
          className={
            _id
            ? application.currentMilestone === "Hippo Donations"
              ? 'button is-rounded is-link column py-6 mx-5 my-2'
              : 'button is-rounded is-info column py-6 mx-5 my-2'
            : 'button is-rounded is-info column py-6 mx-5 my-2'
          }
          style={styles.width}
          value={"Hippo Donations"}
          onClick={submitMilestone}
        >
          Hippo Donations
        </button>
      </div>
        {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  )
}

export default CurrentMilestone
