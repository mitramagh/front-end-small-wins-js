import PropTypes from "prop-types";
import "./PlanList.css";
import Plan from "./Plan";
import AddComment from "./AddComment";

const PlanList = (props) => {
 
  const planComponents = props.planData.map((plan) => {
    return (
      <Plan
        key={plan.id}
        planId={plan.id}
        idea={plan.idea}
        planner={plan.planner}
        selectPlanCallback={props.selectPlanCallback}
        deletePlanCallback={props.deletePlanCallback}
        handleAddComment={props.handleAddComment}
      />
    );
  });

  return <div className="PlanList">{planComponents}</div>;
};

PlanList.propTypes = {
  planData: PropTypes.array.isRequired,
  selectPlanCallback: PropTypes.func.isRequired,
  deletePlanCallback: PropTypes.func.isRequired,
};

export default PlanList;
