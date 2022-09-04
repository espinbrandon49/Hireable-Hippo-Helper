import React from 'react'


const styles = {
  box: {
    height: "50vh",
  }
}

const dataVisual = ({applications }) => {
  // if (!applications.length) {
  //   return <h3> No user applications</h3>
  // }
  return (
    <div className='column'>
      <div className='box' style={styles.box}>
        DATA VISUALS
        {
          JSON.stringify(applications)
        // users &&
        //   users.map((user, i) => (
        //     <div key={i}>
        //       {
        //         user.applications.length
        //       }
        //     </div>
        //   ))
        }
      </div>
    </div>
  )
}

export default dataVisual
