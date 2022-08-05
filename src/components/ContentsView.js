// import axios from "axios";
import "./ContentsView.css";
import ContentList from "./ContentList";
import NewContentButton from "./NewContentButton";
import PropTypes from "prop-types";

const ContentsView = ({
  Contents,
  deleteContent,
  submitContent,
  updateLikes,
  chosenBoard,
  setChosenBoard,
  setContents,
}) => {
  const exitBoard = () => {
    setChosenBoard(null);
  };

  // const funcOnSortChange = (event) => {
  //   console.log(event);
  //   const sortOption = document.getElementById("sortOptionsDropDown").value;
  //   console.log(sortOption);
  //   sortOption.addEventListener("change", sortContents);
  // };

  // have state for Contents?   setContents()

  const sortContents = () => {
    let optionChosen = document.getElementById("sortOptionsDropDown").value;
    console.log(optionChosen);
    const newContents = [...Contents];
    if (optionChosen === "sort alphabetically") {
      newContents.sort((obj1, obj2) => (obj1.content > obj2.content ? 1 : -1));
    } else if (optionChosen === "sort by likes") {
      newContents.sort((obj1, obj2) => (obj1.like_count > obj2.like_count ? 1 : -1));
    } else if (optionChosen === "sort by ID") {
      newContents.sort((obj1, obj2) => (obj1.Content_id > obj2.Content_id ? 1 : -1));
    }
    setContents(newContents);
  };

  return (
    <div className="container">
      <button onClick={exitBoard}>Return to boards</button>
      <ContentList
        Contents={Contents}
        deleteContent={deleteContent}
        updateLikes={updateLikes}
      ></ContentList>
      <NewContentButton
        submitContent={submitContent}
        chosenBoard={chosenBoard}
      ></NewContentButton>
      <select id="sortOptionsDropDown" onChange={sortContents}>
        <option>sort alphabetically</option>
        <option>sort by likes</option>
        <option>sort by ID</option>
      </select>
    </div>
  );
};

ContentsView.propTypes = {
  Contents: PropTypes.arrayOf(
    PropTypes.shape({
      Content_id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      like_count: PropTypes.number.isRequired,
    })
  ),
  deleteContent: PropTypes.func.isRequired,
  submitContent: PropTypes.func.isRequired,
  updateLikes: PropTypes.func.isRequired,
};

export default ContentsView;
