import React, { useEffect, useState } from 'react'
import { useQuill } from 'react-quilljs';
// import 'quill/dist/quill.snow.css';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { useMutation } from '@apollo/client';
import { UPDATE_NOTE } from "../../../../utils/mutations"

const styles = {
  note: {
    height: '50vh',
  },
};

const Notes = ({ application }) => {
  const [note, setNote] = useState(application.note)
  const [updateNote, { data, loading, error }] = useMutation(UPDATE_NOTE);
  
  // initiate  Quill
  // const { quill, quillRef } = useQuill();

  // React.useEffect(() => {
  //   if (quill) {
  //     quill.clipboard.dangerouslyPasteHTML(application.note);
  //   }
  // }, [application.note]);

  // React.useEffect(() => {
  //   if (quill) {
  //     quill.on('text-change', (delta, oldDelta, source) => {
  //       setNote(quill.getText())
  //       // console.log('Text change!');
  //       // console.log(quill.getText()); // Get text only
  //       // console.log(quill.getContents()); // Get delta contents
  //       // console.log(quill.root.innerHTML); // Get innerHTML using quill
  //       // console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
  //     });
  //   }
  // }, [quill]);

  React.useEffect(() => {
    if (Quill) {
      // quill.clipboard.dangerouslyPasteHTML(application.note);
      // quill.clipboard.dangerouslyPasteHTML(application.note);
      setNote(application.note)
      // console.log(application.note)
    }
  }, [application.note]);

  console.log(application.note)
  console.log(note)

  // form handler to make notes
  const handleFormSubmit = async (event) => {
    event.preventDefault()
    try {
      await updateNote({
        // variables: { _id: application._id, note: quill.getText() },
        variables: { _id: application._id, note: note },
      });
      await setNote(note)
      console.log("Success");
    } catch (err) {
      console.error(err);
    }
    // await setNote(application.note)
  };
  if (loading) return 'Updating';
  if (error) return `Update error! ${error.message}`

  if (application._id !== undefined) {
    return (
      <form className='column' onSubmit={handleFormSubmit} >
        {/* Quill editor  */}
        <div style={styles.note} >
          {/* <div ref={quillRef} /> */}
          {/* <ReactQuill style={styles.note} theme="snow" value={note} onChange={setNote}/> */}
          <ReactQuill style={styles.note} theme="snow" value={note} defaultValue={application.note} onChange={setNote}/>
        </div>

        <button
          className="button is-info mt-3"
          style={{ cursor: "pointer" }}
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
//
export default Notes
