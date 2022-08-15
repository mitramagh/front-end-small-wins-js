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

  const handleFormInput = (event) => {
    const inputElement = event.target;
    const name = inputElement.name;
    const value = inputElement.value;

    // make a new object based on form object
    const newForm = { ...formData , isComplete:formData.isComplete === 'true'};
    newForm[name] = value;
    // console.log(newForm);
    setFormData(newForm);
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    if (!formData) return;
    props.makePlanCallback(formData);
    props.handleClose();
  };

//   return (
//     <form onSubmit={handleFormSubmission}>
//         <label htmlFor="idea"></label>
//         <input 
//         className="form-control"
//         name="idea"
//         value={formData.idea} 
//         onChange={handleFormInput}
//         type="text" />
//         <label htmlFor="planner"></label>
//         <input 
//         name="planner"
//         value={formData.planner} 
//         type="text"  
//         onChange={handleFormInput} 
//         />
//         <button type="submit" className="btn btn-primary my=2 rounded-pill"> Add your Plan</button>
//     </form>
// );


  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <form onSubmit={handleFormSubmission}>
          <label>idea</label>
          <input
            type="text"
            name="idea"
            value={formData.idea}
            onChange={handleFormInput}
          ></input>
          <label>planner</label>
          <input
            type="text"
            name="planner"
            value={formData.planner}
            onChange={handleFormInput}
          ></input>

          <input type="submit"></input>
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
