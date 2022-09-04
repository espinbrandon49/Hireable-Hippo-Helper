import React from 'react'

const styles = {
  box: {
    height: "50vh",
  }
}

const dataVisual = ({applications }) => {

  return (
    <div className='column'>
      <div className='box' style={styles.box}>
        DATA VISUALS
        {
          // JSON.stringify(applications)
          applications.map((application, i) => (
            application._id
          ))
        }
        {console.log(applications.length)}
      </div>
    </div>
  )
}

export default dataVisual
