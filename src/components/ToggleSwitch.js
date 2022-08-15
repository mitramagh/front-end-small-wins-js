import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ value, onClick, name, className }) => {
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="checkbox"
        name={name}
        id={name}
        onClick={onClick}
      />
      <label className="label" htmlFor={name}>
        <span className={className} />
        <span className="switch" />
      </label>
    </div>
  );
};

export default ToggleSwitch;
