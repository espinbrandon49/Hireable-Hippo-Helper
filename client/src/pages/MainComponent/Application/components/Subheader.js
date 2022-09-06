import React from 'react'
import { useParams } from 'react-router-dom'

const Subheader = ({applications}) => {

  const { _id } = useParams();

  const application = applications.filter((application) => application._id === _id)[0];
///
  if (!application) {
    return (
      <div className='block'>
        <h1 className='title'>Choose or Add New Application</h1>
        {/* <h2 className='subtitle'>Job Title:</h2> */}
      </div>
    )
  } else {
    return (
      <div className='block'>
        <h1 className='title'>{application.company}</h1>
        <h2 className='subtitle'>{application.jobTitle}</h2>
      </div>
    )
  }
}

export default Subheader
