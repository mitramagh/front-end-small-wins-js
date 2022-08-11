// import axios from "axios";
import "./ContentsView.css";
import ContentList from "./ContentList";
import NewContentForm from "./NewContentForm";
import PropTypes from "prop-types";
import FileUpload from "./FileUpload"

const ContentsView = ({
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

  console.log("content")
  console.log({submitContent, chosenPlan})
  return (
    <div>
      <div className="container">
        <button onClick={exitPlan}>⬅</button>
        <ContentList
          contents={contents}
          deleteContent={deleteContent}
          updateLikes={updateLikes}
        ></ContentList>
        <NewContentForm
          submitContent={submitContent}
          chosenPlan={chosenPlan}
        ></NewContentForm>
      </div>
          <FileUpload 
          submitContent={submitContent}
          chosenPlan={chosenPlan}
          />
    </div>
  );
};

ContentsView.propTypes = {
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

export default ContentsView;
