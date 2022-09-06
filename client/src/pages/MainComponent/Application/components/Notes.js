import React from 'react'
// import react-Quill
import { useQuill } from 'react-quilljs';
import { useParams } from 'react-router-dom';
// import Quill stylesheet
import 'quill/dist/quill.snow.css'
import { useMutation } from '@apollo/client';
import { UPDATE_NOTE } from "../../../../utils/mutations"

const styles = {
  note: {
    height: '50vh',
  },

};

const Notes = ({ applications }) => {
  console.log(applications)

  const [updateNote, { data, loading, error }] = useMutation(UPDATE_NOTE);

  // initiate  Quill
  const { quill, quillRef } = useQuill();

  // var id = window.location.href.split("/")
  const { _id } = useParams();
  console.log(_id);

  //filter by single application
  const application = applications.filter((application) => application._id === _id)[0];

  // useEffect hook to populate Quill with an initial value
  React.useEffect(() => {
    if (quill) {
      !_id
        ? quill.clipboard.dangerouslyPasteHTML('<h2>Hippopotamus Notes <br/> Interview Dates <br/> Copy/Paste Job Description</h2>')
        : quill.clipboard.dangerouslyPasteHTML(`<h2>${application.note}</h2>`)
    }
  }, [quill]);

  // form handler to make notes
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(_id, quill.getText());
    try {
      await updateNote({
        variables: { _id: _id, note: quill.getText() },
      });
      console.log("Success");
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return 'Updating';
  if (error) return `Update error! ${error.message}`

  return (
    <form className='column' onSubmit={handleFormSubmit} >
      {/* Quill editor  */}
      <div style={styles.note} ref={quillRef} />
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
}
//
export default Notes
