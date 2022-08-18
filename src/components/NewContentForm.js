// import axios from "axios";
import React, { useState } from "react";
import "./NewContentForm.css";
import PropTypes from "prop-types";

const defaultContent = {
  content: "",
  like_count: 0,
};

const NewContentForm = ({ submitContent, chosenPlan }) => {
  const [contentData, setContentData] = useState(defaultContent);
  const [errors, setErrors] = useState({})

  const validateContentInput=(contentData)=> {
    const errors={}
  if (contentData.content.trim()=== "") {
    errors.content= "Please add a content!";
  }
  return Object.keys(errors).length === 0 ? null : errors;
}
  const handleContentFormInput = (e) => {
    const inputElement = e.target;
    const name = inputElement.name;
    const value = inputElement.value;

    const newContentData = { ...contentData };
    newContentData[name] = value;
    console.log(newContentData);
    setContentData(newContentData);
  };

  const handleContentFormSubmission = (e) => {
    e.preventDefault();

    const errors=validateContentInput(contentData);
    console.log("validation error", errors);
    setErrors( errors || {} )
    if (errors) return;

    submitContent(chosenPlan, contentData);
    setContentData(defaultContent);
  };

  return (
    <div className="contentform">
      <form onSubmit={handleContentFormSubmission}>
        
          <legend>Add a new Content</legend>
          <label htmlFor="content">Content</label>
          <input
            name="content"
            type="text"
            value={contentData.content}
            placeholder='Paste a new content here ...'
            onChange={handleContentFormInput}
            id="content"
          ></input>
          <p>{errors.content && <div className="formerror">{errors.content}</div>}</p>
          <label htmlFor="type">
            Content Type
            <select
              name="type"
              id="type"
              value={contentData.type}
              onChange={handleContentFormInput}
            >
              <option value="Video" data-testid="select-option">
                Video
              </option>
              <option value="Audio" data-testid="select-option">
                Audio
              </option>
              <option value="Text" data-testid="select-option">
                Text
              </option>
            
            </select>
          </label>
          <input className="submitcontent" type="submit" />
        
      </form>
    </div>
  );
};

NewContentForm.propTypes = {
  submitContent: PropTypes.func.isRequired,
};

export default NewContentForm;
