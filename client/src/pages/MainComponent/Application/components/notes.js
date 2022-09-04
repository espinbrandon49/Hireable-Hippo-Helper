import React, { useState } from 'react'
// import react-Quill
import { useQuill } from 'react-quilljs';
// import Quill stylesheet
import 'quill/dist/quill.snow.css'

const Notes = () => {

  const [formState, setFormState] = useState({ notes: "" })

  // initiate  Quill
  const { quill, quillRef } = useQuill();

  // useEffect hook to populate Quill with an initial value
  React.useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML('<h1>Hipponotes</h1>');
    }
  }, [quill]);

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log(formState);
  //     try {
  //       const {data} = await updateApplication({
  //         variables: {...formState, applicant: Auth.getProfile().data.username}
  //       });
  //     } catch (err) {
  //       console.error(err);
  //     }
  // };

  // useEffect hook to set the state using the text value in Quill=editor on change
  //resembles handleInputChange but more hip-po
  React.useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldDelta, source) => {
        // console.log('Text change!');
        console.log(quill.getText()); // Get text only
        // console.log(quill.getContents()); // Get delta contents
        // console.log(quill.root.innerHTML); // Get innerHTML using quill
        // console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
        setFormState({
          notes: quill.getText(),
        });
      });
    }
  }, [quill]);

  console.log(formState)

  return (
    <div className='box column' >
      {/* Quill Wrapper contains toolbar and editor */}
      <div style={{ width: 400, height: 200 }}>
        {/* Quill editor  */}
        <div ref={quillRef} />
      </div>
    </div>
  )
}

export default Notes
