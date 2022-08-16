import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import NewPlanForm from "./NewPlanForm";
import plus from '../assets/plus.svg';
import "./NewPlanButton.css";

const NewPlanButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <input id="addPlan" onClick={togglePopup} type="image" src={plus} alt="add a new Plan"/>
      {isOpen && (
        <NewPlanForm
          makePlanCallback={props.makePlanCallback}
          handleClose={togglePopup}
          
        />
      )}
    </div>
  );
};

NewPlanButton.propTypes = {
  makePlanCallback: PropTypes.func.isRequired,
};

export default NewPlanButton;
