import React, { useEffect, useState } from 'react'

const Subheader = ({ application }) => {

  // const [applications, setApplications] = useState({application})

  // useEffect(() => {
  //   setApplications({...application})
  // }, [application])

  if (application === undefined) {
    return (
      <div className='block'>
        <h1 className='title'>Choose or Add New Application</h1>
        
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
