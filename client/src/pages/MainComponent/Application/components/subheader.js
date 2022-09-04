import React from 'react'

const subheader = ({applications}) => {
  return (
    <div>
      <h1 className='title'>{applications.company}</h1>
      <h2 className='subtitle'>Job Title</h2>
      {console.log(applications)}
    </div>
  )
}

export default subheader
