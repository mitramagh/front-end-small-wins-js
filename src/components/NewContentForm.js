// import axios from "axios";
import React, { useState } from "react";
import "./NewContentForm.css";
import PropTypes from "prop-types";

const defaultContent = { 
  content: "", 
  like_count: 0 
};

const NewContentForm = ({ submitContent, handleClose, chosenBoard }) => {
  const [ContentData, setContentData] = useState(defaultContent);

  const handleContentFormInput = (e) => {
    const inputElement = e.target;
    const name = inputElement.name;
    const value = inputElement.value;

    const newContentData = { ...ContentData };
    newContentData[name] = value;
    setContentData(newContentData);
  };

  const handleContentFormSubmission = (e) => {
    e.preventDefault();
    submitContent(chosenBoard, ContentData);
    setContentData(defaultContent);
    handleClose();
  };

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>
          x
        </span>
        <form onSubmit={handleContentFormSubmission}>
          <fieldset>
            <legend>Create a new Content.</legend>
            <label htmlFor="content">content</label>
            <input
              name="content"
              type="text"
              value={ContentData.content}
              onChange={handleContentFormInput}
              id="content"
            ></input>
            <input type="submit" />
          </fieldset>
        </form>
      </div>
    </div>
  )
}

NewContentForm.propTypes={
  submitContent: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default NewContentForm;
