import React from 'react'
// import react-Quill
import { useQuill } from 'react-quilljs';
// import Quill stylesheet
import 'quill/dist/quill.snow.css'
import { useMutation } from '@apollo/client';
import { UPDATE_NOTE } from "../../../../utils/mutations"

const styles = {
  note: {
    height: '50vh',
  },
};

const Notes = ({ application }) => {

  const [updateNote, { data, loading, error }] = useMutation(UPDATE_NOTE);
  // console.log(data)
  // initiate  Quill
  const { quill, quillRef } = useQuill();

  // useEffect hook to populate Quill with an initial value
  React.useEffect(() => {

    if (quill) {
      application._id && application.note
        ? quill.setText(application.note)
        :  quill.clipboard.dangerouslyPasteHTML('<h3>Hippopotamus Notes <br/> Interview Dates <br/> Copy/Paste Job Description</h3>')
    }
  }, [quill]);

  // form handler to make notes
  const handleFormSubmit = async (event) => {
    try {
      await updateNote({
        variables: { _id: application._id, note: quill.getText() },
      });
      console.log("Success");
    } catch (err) {
      console.error(err);
    }
    window.location.reload();
  };

  if (loading) return 'Updating';
  if (error) return `Update error! ${error.message}`

  if (application._id !== undefined) {
    return (
      <form className='column' onSubmit={handleFormSubmit} >
        {/* Quill editor  */}
        <div>
          <div style={styles.note} ref={quillRef} value={application.note} />
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
