import React from 'react'

const styles = {
  box: {
    height: '100%',
  }
}

const SideBar = () => {
  return (
    <div className='column is-one-quarter'>
      <div className='box' style={styles.box}>
        SIDEBAR - Hello HippoWorld
      </div>
    </div>
  )
}

export default SideBar
