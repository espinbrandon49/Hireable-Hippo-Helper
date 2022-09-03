import React from 'react'



const styles = {
  box: {
    height: "50vh",
  }
}

const dataVisual = ({ users }) => {
  if (!users.length) {
    return <h3> No user applications</h3>
  }
  return (
    <div className='column'>
      <div className='box' style={styles.box}>
        DATA VISUALS
        {users &&
          users.map((user, i) => (
            <div key={i}>
              {/* {
              JSON.stringify(user.applications)
              } */}
              {
                user.applications.length
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default dataVisual
