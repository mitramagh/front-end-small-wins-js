import React from "react";
import PropTypes from "prop-types";
import "./NewPlanForm.css";
import { useState } from "react";
import { FaGalacticSenate } from "react-icons/fa";

const defaultForm = {
  idea: "",
  planner: "",
  isComplete: false,
};

const NewPlanForm = (props) => {
  const [formData, setFormData] = useState(defaultForm);
  const [errors, setErrors] = useState({})

  const validateInput=(formData)=> {
    const errors={}

    if (formData.idea.trim()=== "") {
      errors.idea= "Please Describe your plan!";
    }
    if (formData.planner.trim()=== ""){
      errors.planner= "Please Tell us your name!";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  }
  // const validateProperty= inputElement => {
  //   if (inputElement.name === "idea") {
  //     if (inputElement.value.trim() === "") return "Please Describe your plan!";
  //   }
  //   if (inputElement.name === "planner") {
  //     if (inputElement.value.trim() === "") return "Please Tell us your name!";
  //   }
  // }
  const handleFormInput = (event) => {
    const inputElement = event.target;
    const name = inputElement.name;
    const value = inputElement.value;

    // const errors = {...errors}
    // const errorMessage = validateProperty(inputElement)
    // if (errorMessage) errors[name] = errorMessage
    // else delete errors[name];

    // make a new object based on form object
    const newForm = { ...formData , isComplete:formData.isComplete === 'true'};
    newForm[name] = value;
    // console.log(newForm);
    setFormData(newForm);
    // setErrors({errors : errors || {} })
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();

    const errors=validateInput(formData);
    console.log("validation error", errors);
    setErrors( errors || {} )
    if (errors) return;

    props.makePlanCallback(formData);
    props.handleClose();
  };



  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <form onSubmit={handleFormSubmission}>
          <label>Idea</label>
          <input
            type="text"
            name="idea"
            value={formData.idea}
            onChange={handleFormInput}
            ></input>
          <p>{errors.idea && <div className="formerror2">{errors.idea}</div>}</p>
          <label>Planner</label>
          <input
            type="text"
            name="planner"
            value={formData.planner}
            onChange={handleFormInput}
            ></input>
          <p>{errors.planner && <div className="formerror2">{errors.planner}</div>}</p>

          <input  type="submit"></input>
        </form>
      </div>
    </div>
  );
};

NewPlanForm.propTypes = {
  makePlanCallback: PropTypes.func.isRequired,
  // handleClose: PropTypes.func.isRequired,
};

export default NewPlanForm;
