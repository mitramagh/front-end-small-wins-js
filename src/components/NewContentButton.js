// import axios from "axios";
import React, { useState } from "react";
import "./NewContentButton.css";
import NewContentForm from "./NewContentForm";
import PropTypes from "prop-types";
import plus from '../assets/plus.svg';

const NewContentButton = ({submitContent, chosenBoard}) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <input id="addContent" onClick={togglePopup} type="image" src={plus} alt="add a new board"/>
      {isOpen && (
        <NewContentForm
          submitContent={submitContent}
          handleClose={togglePopup}
          chosenBoard={chosenBoard}
        />
      )}     
    </div>
  );
};

export default NewContentButton;
