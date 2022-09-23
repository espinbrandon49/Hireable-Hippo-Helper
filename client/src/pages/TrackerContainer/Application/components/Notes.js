import React, { useEffect, useState } from 'react'
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { useMutation } from '@apollo/client';
import { UPDATE_NOTE } from "../../../../utils/mutations"

const styles = {
  note: {
    height: '50vh',
  },
  noteBtn: {
    width: '100%',
    cursor: "pointer" 
  }
};

const Notes = ({ application }) => {
  const [note, setNote] = useState(application.note)
  const [updateNote, { data, loading, error }] = useMutation(UPDATE_NOTE);

  useEffect(() => {
    if (Quill) {
      setNote(application.note)
    }
  }, [application.note]);

  // form handler to make notes
  const handleFormSubmit = async (event) => {
    event.preventDefault()
    try {
      await updateNote({
        variables: { _id: application._id, note: note },
      });
      await setNote(note)
      console.log("Success");
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return 'Updating';
  if (error) return `Update error! ${error.message}`

  if (application._id !== undefined) {
    return (
      <form className='column' onSubmit={handleFormSubmit} >
        {/* Quill editor  */}
        <div style={styles.note} >
          <ReactQuill style={styles.note} theme="snow" value={note} defaultValue={application.note} onChange={setNote} />   
        </div>
        <button
          className="button is-info mt-3"
          style={styles.noteBtn}
          name="submit"
          type="submit"
        >
          Submit
        </button>
      </form>
    )
  } else {
    return (
      <></>
    )
  }
}
export default Notes
