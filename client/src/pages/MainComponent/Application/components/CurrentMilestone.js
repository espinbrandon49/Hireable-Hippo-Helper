import React from 'react'
import { useMutation } from '@apollo/client';
import { UPDATE_MILESTONE, ADD_MILESTONE } from '../../../../utils/mutations';
import { useParams } from 'react-router-dom';

const styles = {
  button: {
    borderRadius: "50%",
  },
};

const CurrentMilestone = ({applications}) => {

  const { _id } = useParams();

  const [updateMilestone, { error, data }] = useMutation(UPDATE_MILESTONE);

  const [addMilestone, { err, dataA }] = useMutation(ADD_MILESTONE);

  console.log(`DATA: ${JSON.stringify(data)}`)
  console.log(`DATAA: ${dataA}`)

  const application = applications.filter((application) => application._id === _id)[0];
  console.log(application.milestones)

  let milestones = application.milestones

  const submitMilestone = async (event) => {
    event.preventDefault();

    const currentMilestone = event.target.value;
    const milestonesPass = event.target.value
    // console.log(_id, currentMilestone);
    // console.log(event.target.value);
 
    // let milestonesArray = application.milestones
    milestones.concat(milestonesPass)
    
    // console.log(application.milestones)
    // console.log('meow')

    try {
      // console.log(_id, currentMilestone)
      await updateMilestone({
        variables: { _id: _id, currentMilestone: currentMilestone },
      });
      await addMilestone({
        variables: { _id: _id, milestones: milestones },
      });
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
              ? 'button column is-fullwidth py-6 mx-3 my-2 is-link'
              : 'button column is-fullwidth py-6 mx-3 my-2 is-info'
            : 'button column is-fullwidth py-6 mx-3 my-2 is-info'
          }
          style={styles.button}
          value={"Applied"}
          onClick={submitMilestone}
        >
          Applied
        </button>
        <button
          className={
            _id
            ? application.currentMilestone === "Phone Interview"
              ? 'button column is-fullwidth py-6 mx-3 my-2 is-link'
              : 'button column is-fullwidth py-6 mx-3 my-2 is-info'
            : 'button column is-fullwidth py-6 mx-3 my-2 is-info'
          }
          style={styles.button}
          value={"Phone Interview"}
          onClick={submitMilestone}
        >
          Phone Interview
        </button>
        <button
          className={
            _id
            ? application.currentMilestone === "Technical Interview"
              ? 'button column is-fullwidth py-6 mx-3 my-2 is-link'
              : 'button column is-fullwidth py-6 mx-3 my-2 is-info'
            : 'button column is-fullwidth py-6 mx-3 my-2 is-info'
          }
          style={styles.button}
          value={"Technical Interview"}
          onClick={submitMilestone}
        >
          Technical Interview
        </button>
        <button
          className={
            _id
            ? application.currentMilestone === "In Person Interview"
              ? 'button column is-fullwidth py-6 mx-3 my-2 is-link'
              : 'button column is-fullwidth py-6 mx-3 my-2 is-info'
            : 'button column is-fullwidth py-6 mx-3 my-2 is-info'
          }
          style={styles.button}
          value={"In Person Interview"}
          onClick={submitMilestone}
        >
          In Person Interview
        </button>
        <button
          className={
            _id
            ? application.currentMilestone === "Job Offer"
              ? 'button column is-fullwidth py-6 mx-3 my-2 is-link'
              : 'button column is-fullwidth py-6 mx-3 my-2 is-info'
            : 'button column is-fullwidth py-6 mx-3 my-2 is-info'
          }
          style={styles.button}
          value={"Job Offer"}
          onClick={submitMilestone}
        >
          Job Offer
        </button>
        <button
          className={
            _id
            ? application.currentMilestone === "Accepted"
              ? 'button column is-fullwidth py-6 mx-3 my-2 is-link'
              : 'button column is-fullwidth py-6 mx-3 my-2 is-info'
            : 'button column is-fullwidth py-6 mx-3 my-2 is-info'
          }
          style={styles.button}
          value={"Accepted"}
          onClick={submitMilestone}
        >
          Accepted
        </button>
        <button
          className={
            _id
            ? application.currentMilestone === "Rejected"
              ? 'button column is-fullwidth py-6 mx-3 my-2 is-link'
              : 'button column is-fullwidth py-6 mx-3 my-2 is-info'
            : 'button column is-fullwidth py-6 mx-3 my-2 is-info'
          }
          style={styles.button}
          value={"Rejected"}
          onClick={submitMilestone}
        >
          Rejected
        </button>
        <button
          className={
            _id
            ? application.currentMilestone === "Hippo Donations"
              ? 'button column is-fullwidth py-6 mx-3 my-2 is-link'
              : 'button column is-fullwidth py-6 mx-3 my-2 is-info'
            : 'button column is-fullwidth py-6 mx-3 my-2 is-info'
          }
          style={styles.button}
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
