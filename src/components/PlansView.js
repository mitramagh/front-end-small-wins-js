import PlanList from "./PlanList";
import PropTypes from "prop-types";
import NewPlanButton from "./NewPlanButton";
import NewPlanForm from "./NewPlanForm";
import AddComment from "./AddComment";
import "./PlansView.css";

const PlansView = (props) => {
  return (
    <div className="container">
      <p className="planview-counter">
        {" "}
        Congrats! You Achieved 2 Short-Term and 1 Long-Term plan!!
      </p>
      <PlanList
        planData={props.planData}
        selectPlanCallback={props.selectPlanCallback}
        deletePlanCallback={props.deletePlanCallback}
        handleToggleCompleted={props.handleToggleCompleted}
      />
      <AddComment handleAddComment={props.handleAddComment} />
      <NewPlanButton makePlanCallback={props.makePlanCallback} />
    </div>
  );
};

PlansView.propTypes = {
  planData: PropTypes.array.isRequired,
  selectPlanCallback: PropTypes.func.isRequired,
  deletePlanCallback: PropTypes.func.isRequired,
  makePlanCallback: PropTypes.func.isRequired,
};

export default PlansView;
