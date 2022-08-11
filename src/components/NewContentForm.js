// import axios from "axios";
import React, { useState } from "react";
import "./NewContentForm.css";
import PropTypes from "prop-types";

const defaultContent = {
  content: "",
  like_count: 0,
};

const NewContentForm = ({ submitContent, chosenPlan }) => {
  const [ContentData, setContentData] = useState(defaultContent);

  const handleContentFormInput = (e) => {
    const inputElement = e.target;
    const name = inputElement.name;
    const value = inputElement.value;

    const newContentData = { ...ContentData };
    newContentData[name] = value;
    console.log(newContentData);
    setContentData(newContentData);
  };

  const handleContentFormSubmission = (e) => {
    e.preventDefault();
    submitContent(chosenPlan, ContentData);
    setContentData(defaultContent);
  };

  return (
    <div className="contentform">
      <form onSubmit={handleContentFormSubmission}>
        <fieldset>
          <legend>Add a new Content.</legend>
          <label htmlFor="content">Content</label>
          <input
            name="content"
            type="text"
            value={ContentData.content}
            onChange={handleContentFormInput}
            id="content"
          ></input>
          <label htmlFor="type">
            Content Type
            <select
              name="type"
              id="type"
              value={ContentData.type}
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
              <option value="Image" data-testid="select-option">
                Image
              </option>
            </select>
          </label>
          <input className="submitcontent" type="submit" />
        </fieldset>
      </form>
    </div>
  );
};

NewContentForm.propTypes = {
  submitContent: PropTypes.func.isRequired,
};

export default NewContentForm;
