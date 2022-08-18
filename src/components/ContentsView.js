// import axios from "axios";
import "./ContentsView.css";
import ContentList from "./ContentList";
import NewContentForm from "./NewContentForm";
import PropTypes from "prop-types";
import FileUpload from "./FileUpload";
import * as FaIcons from 'react-icons/fa';


const ContentsView = ({
  contents,
  deleteContent,
  submitContent,
  updateLikes,
  // commentForContent,
  chosenPlan,
  setChosenPlan,
  setContents,
}) => {
  const exitPlan = () => {
    setChosenPlan(null);
  };

  const sortContents = () => {
    let optionChosen = document.getElementById("sortOptionsDropDown").value;
    console.log(optionChosen);
    const newContents = [...contents];
    if (optionChosen === "Filter by Type") {
      newContents.sort((obj1, obj2) => (obj1.type > obj2.type ? 1 : -1));
    } else if (optionChosen === "Filter by Likes") {
      newContents.sort((obj1, obj2) => (obj1.like_count < obj2.like_count ? 1 : -1));
    } else if (optionChosen === "Filter by Date") {
      newContents.sort((obj1, obj2) => (obj1.card_id > obj2.card_id ? 1 : -1));
    }
    setContents(newContents);
  };

  console.log("content");
  console.log({ submitContent, chosenPlan });
  return (
    <div className="contentview">
      <div className="containerview">
        <div className="addfile">
          <FileUpload className="fileupload" submitContent={submitContent} chosenPlan={chosenPlan} />
          <NewContentForm
            className="newcontent"
            submitContent={submitContent}
            chosenPlan={chosenPlan}
          ></NewContentForm>
        </div>
        <div className="middlebar">
          <button className='exitview' onClick={exitPlan}>< FaIcons.FaArrowLeft /></button>
          <select className="sortoptions" id="sortOptionsDropDown" onChange={sortContents}>
            <option>Filter by Type</option>
            <option>Filter by Likes</option>
            <option>Filter by Date</option>
          </select>
        </div>
        <ContentList
          className="content-list"
          contents={contents}
          deleteContent={deleteContent}
          updateLikes={updateLikes}
        ></ContentList>
      </div>
      
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
