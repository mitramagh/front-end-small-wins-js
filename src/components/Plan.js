import PropTypes from "prop-types";
// import "./Plan.css";

const Plan = (props) => {
  
  const idea = props.idea;
  const planner = props.planner;
  const planId = props.id;

  return (
    <div className="Plan">
      <div onClick={() => props.selectPlanCallback(planId)}>
        <h1>idea: {idea}</h1>
        <h2>planner: {planner}</h2>
      </div>
      <button onClick={() => props.deletePlanCallback(planId)}>X</button>
    </div>
  );
};

Plan.propTypes = {
  key: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  idea: PropTypes.string.isRequired,
  planner: PropTypes.string.isRequired,
  selectPlanCallback: PropTypes.func.isRequired,
  deletePlanCallback: PropTypes.func.isRequired,
};

export default Plan;
