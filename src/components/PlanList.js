import PropTypes from "prop-types";
import Plan from "./Plan";

const PlanList = (props) => {
  const planComponents = props.planData.map((plan) => {
    console.log("inside plan list:", plan);
    // const createdDate = plan.created_date ? plan.created_date : "NOW";

    // const planStatus = plan.is_complete ? plan.is_complete : "In-progress"
    // const TimeStamp = ({createdDate}) => {
    //   const time = DateTime.fromISO(createdDate.time);
    //   const absolute = time.toFormat('MMMM Do YYYY, h:mm:ss a');
    //   const relative = time.toRelative();
    // }
    return (
      <Plan
        key={plan.id}
        id={plan.id}
        idea={plan.idea}
        planner={plan.planner}
        date={plan.created_date}
        isComplete={!!plan.completed_at}
        selectPlanCallback={props.selectPlanCallback}
        deletePlanCallback={props.deletePlanCallback}
        handleAddComment={props.handleAddComment}
        handleToggleCompleted={props.handleToggleCompleted}
      />
    );
  });

  return (
    <div>
      <div className="PlanList">{planComponents}</div>
      {/* <span title={absolute}>{relative}</span> */}
    </div>
  );
};

PlanList.propTypes = {
  planData: PropTypes.array.isRequired,
  selectPlanCallback: PropTypes.func.isRequired,
  deletePlanCallback: PropTypes.func.isRequired,
};

export default PlanList;
