import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { UPDATE_MILESTONE } from '../../../../utils/mutations';
import { useParams } from 'react-router-dom';

const styles = {
  width: {
    maxWidth: "120px",
    minWidth: "120px",
  },
};

const CurrentMilestone = () => {

  const [currentMilestone, setCurrentMilestone] = useState({
    _id: "",
    currentMilestone: "",
  })

  const { _id } = useParams();

  const [sendMilestone, { error, data }] = useMutation(UPDATE_MILESTONE);

  const submitMilestone = async (event) => {
    event.preventDefault();

    try {
      const { data } = await sendMilestone({
        variables: {...currentMilestone},
      });
    } catch (err) {
      console.error(err);
    }
  }

  const updateMilestone = (event) => {
    const { value } = event.target;
    setCurrentMilestone({
      ...currentMilestone,
      _id: _id,
      currentMilestone: value,
    });
    submitMilestone(event);
  }

  console.log(currentMilestone)

  return (
    <div className='column'>
      <div className='box columns my-2'>
        <button
          className='button is-rounded is-info column py-6 mx-5 my-2'
          style={styles.width}
          value={"Applied"}
          onClick={updateMilestone}
        >
          Applied
        </button>
        <button
          className='button is-rounded is-info column py-6 mx-5 my-2'
          style={styles.width}
          value={"Phone Interview"}
          onClick={updateMilestone}
        >
          Phone Interview
        </button>
        <button
          className='button is-rounded is-info column py-6 mx-5 my-2'
          style={styles.width}
          value={"Technical Interview"}
          onClick={updateMilestone}
        >
          Technical Interview
        </button>
        <button
          className='button is-rounded is-info column py-6 mx-5 my-2'
          style={styles.width}
          value={"In Person Interview"}
          onClick={updateMilestone}
        >
          In Person Interview
        </button>
        <button
          className='button is-rounded is-info column py-6 mx-5 my-2'
          style={styles.width}
          value={"Job Offer"}
          onClick={updateMilestone}
        >
          Job Offer
        </button>
        <button
          className='button is-rounded is-info column py-6 mx-5 my-2'
          style={styles.width}
          value={"Accepted"}
          onClick={updateMilestone}
        >
          Accepted
        </button>
        <button
          className='button is-rounded is-info column py-6 mx-5 my-2'
          style={styles.width}
          value={"Rejected"}
          onClick={updateMilestone}
        >
          Rejected
        </button>
        <button
          className='button is-rounded is-info column py-6 mx-5 my-2'
          style={styles.width}
          value={"Hippo Donations"}
          onClick={updateMilestone}
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
