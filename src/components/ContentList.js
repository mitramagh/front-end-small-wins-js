// import axios from "axios";
import React from "react";
import "./ContentList.css";
import Content from "./Content";
import PropTypes from "prop-types";

const ContentList = ({ contents, deleteContent, updateLikes }) => {
  const contentComponents = contents.map((content) => {
    return (
      <Content
        Content_id={content.content_id}
        board_id={content.board_id}
        content={content.content}
        content_type={content.content_type}
        like_count={content.like_count}
        comment={content.comment}
        deleteContent={deleteContent}
        updateLikes={updateLikes}
      ></Content>
    );
  });

  return <div className="ContentList">{contentComponents}</div>;
};

ContentList.propTypes = {
  contents: PropTypes.arrayOf(
    PropTypes.shape({
      content_id: PropTypes.number.isRequired,
      plan_id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      like_count: PropTypes.number.isRequired,
    })
  ),
  deleteContent: PropTypes.func.isRequired,
  updateLikes: PropTypes.func.isRequired,
};

export default ContentList;
