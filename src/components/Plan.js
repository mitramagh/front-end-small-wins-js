import { useState } from "react";
import PropTypes from "prop-types";
import "./Plan.css";
import ToggleSwitch from "./ToggleSwitch";

const Plan = (props) => {
  const [isShortTerm, setShortTerm] = useState(false);
  const idea = props.idea;
  const planner = props.planner;
  const planId = props.id;
  const date = (
    props.date ? new Date(props.date) : new Date()
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  const isComplete = props.isComplete;
  console.log("INSIDE PLAN");
  console.log(props);

  // const [status, setStatus] = useState('In-progress');

  return (
    <div className="plan">
      <div
        className="plantext"
        onClick={() => props.selectPlanCallback(planId)}
      >
        <h1>Idea: {idea}</h1>
      </div>
      <div>
        <h2>Planner: {planner}</h2>
      </div>
      <div>
        <h2>Status: </h2>
        <ToggleSwitch
          value={isComplete}
          name={`isComplete-${planId}`}
          onClick={() => props.handleToggleCompleted(planId, !isComplete)}
          className="status"
        />
      </div>
      <div>
        <h2>Duration:</h2>
        <ToggleSwitch
          value={isShortTerm}
          name={`duration-${planId}`}
          onClick={() => setShortTerm(!isShortTerm)}
          className="duration"
        />
      </div>
      <button
        className="deleteplan"
        onClick={() => props.deletePlanCallback(planId)}
      >
        X
      </button>
      <div>
        <p> Created at: {date}</p>
      </div>
    </div>
  );
};

Plan.propTypes = {
  key: PropTypes.number.isRequired,
  planId: PropTypes.number.isRequired,
  idea: PropTypes.string.isRequired,
  planner: PropTypes.string.isRequired,
  selectPlanCallback: PropTypes.func.isRequired,
  deletePlanCallback: PropTypes.func.isRequired,
};

export default Plan;
