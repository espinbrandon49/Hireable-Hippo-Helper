import React, { useState} from 'react'
import Auth from "../../../../utils/auth";
// import react-Quill
import { useQuill } from 'react-quilljs';
import { useParams } from 'react-router-dom';
// import Quill stylesheet
import 'quill/dist/quill.snow.css'

import { useMutation } from '@apollo/client';
import { UPDATE_NOTE } from "../../../../utils/mutations"

const Notes = () => {
  
  const [updateNote, {data, loading, error }] = useMutation(UPDATE_NOTE);
  // const [formState, setFormState] = useState({
  //   applicant: Auth.getProfile().data.username,
  //   notes: "" 
  // })
  // initiate  Quill
  const { quill, quillRef } = useQuill();
  var id = window.location.href.split("/")
  
 
  // useEffect hook to populate Quill with an initial value
  React.useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML('<h1>Hipponotes</h1>');
    }
  }, [quill]);

  // useEffect hook to set the state using the text value in Quill=editor on change
  //resembles handleInputChange but more hip-po
  // React.useEffect(() => {
  //   if (quill) {
  //     quill.on('text-change', (delta, oldDelta, source) => {
  //       // console.log('Text change!');
  //       // console.log(typeof quill.getText()); // Get text only
  //       // console.log(quill.getContents()); // Get delta contents
  //       // console.log(quill.root.innerHTML); // Get innerHTML using quill
  //       // console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
  //       setFormState({
  //         applicant: Auth.getProfile().data.username,
  //         notes: quill.getText(),
  //       });
  //     });
  //   }
  // }, [quill]);
  
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    id = id[id.length-1];
    console.log(id.split("#")[0]);
    id = id.split("#")[0];
    console.log(id, quill.getText());
    try {
      await updateNote({
        variables: { _id: id, note: quill.getText() },
      });
      console.log("Success");
    } catch (err) {
      console.error(err);
    }
      // try {
      //   const {data} = await updateNote({
      //     variables: {...formState}
      //   });
      // } catch (error) {
      //   console.error(error);
      // }
  };

  if (loading) return 'Updating';
  if (error) return `Update error! ${error.message}`

  return (
    <div className='box column'>
      {/*Form wrapper contains toolbar, editor, submit btn */}
      <form style={{ width: 400, height: 200 }} onSubmit={handleFormSubmit} >        
        {/* Quill editor  */}
        <div ref={quillRef} />
        <button
          className="button is-info"
          style={{ cursor: "pointer" }}
          name="submit"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Notes
