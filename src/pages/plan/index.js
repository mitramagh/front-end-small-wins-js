import PropTypes from "prop-types";
import "./PlanStyle.css";
import { AddButton } from "../../components/plan/form";
import { List } from "../../components/plan";
import AddComment from "../../components/common/comment";

const PlansPage = (props) => {
  return (
    <div className="container">
      <List
        planData={props.planData}
        selectPlanCallback={props.selectPlanCallback}
        deletePlanCallback={props.deletePlanCallback}
      />
      <AddComment handleAddComment={props.handleAddComment} />
      <AddButton makePlanCallback={props.makePlanCallback} />
    </div>
  );
};

PlansPage.propTypes = {
  planData: PropTypes.array.isRequired,
  selectPlanCallback: PropTypes.func.isRequired,
  deletePlanCallback: PropTypes.func.isRequired,
  makePlanCallback: PropTypes.func.isRequired,
};

export default PlansPage;
