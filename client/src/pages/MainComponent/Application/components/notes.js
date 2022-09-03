import React from 'react'

const styles = {
  box: {
    height: '100%',
  }
}

const notes = () => {
  return (
    <div className='column'>
      <div className='box' style={styles.box}>
        NOTES (QUILL) Hello HippoWorld
      </div>
    </div>
  )
}

export default notes
