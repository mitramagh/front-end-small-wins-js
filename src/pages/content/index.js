// import axios from "axios";
import "./ContentStyle.css";
import { List, Form } from "../../components/content";
import PropTypes from "prop-types";
import FileUpload from "../../components/common/fileUpload";

const ContentsPage = ({
  contents,
  deleteContent,
  submitContent,
  updateLikes,
  chosenPlan,
  setChosenPlan,
  setContents,
}) => {
  const exitPlan = () => {
    setChosenPlan(null);
  };

  console.log("content");
  console.log({ submitContent, chosenPlan });
  return (
    <div>
      <div className="container">
        <button onClick={exitPlan}>⬅</button>
        <List
          contents={contents}
          deleteContent={deleteContent}
          updateLikes={updateLikes}
        />
        <Form submitContent={submitContent} chosenPlan={chosenPlan} />
      </div>
      <FileUpload submitContent={submitContent} chosenPlan={chosenPlan} />
    </div>
  );
};

ContentsPage.propTypes = {
  Contents: PropTypes.arrayOf(
    PropTypes.shape({
      Content_id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      like_count: PropTypes.number.isRequired,
    })
  ),
  deleteContent: PropTypes.func.isRequired,
  submitContent: PropTypes.func.isRequired,
  updateLikes: PropTypes.func.isRequired,
};

export default ContentsPage;
