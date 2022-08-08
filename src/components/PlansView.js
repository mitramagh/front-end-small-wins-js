import PlanList from "./PlanList";
import PropTypes from "prop-types";
import "./PlansView.css";
import NewPlanButton from "./NewPlanButton";
import NewPlanForm from "./NewPlanForm";
import AddComment from "./AddComment"

const PlansView = (props) => {
  return (
    <div className="container">
      <PlanList
        planData={props.planData}
        selectPlanCallback={props.selectPlanCallback}
        deletePlanCallback={props.deletePlanCallback}
      />
      <AddComment  handleAddComment={props.handleAddComment}/>
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
