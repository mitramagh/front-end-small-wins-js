// import axios from "axios";
import React from "react";
import "./ContentsView.css";
import Content from "./Content";
import PropTypes from "prop-types";

const ContentList = ({ contents, deleteContent, updateLikes }) => {
  const contentComponents = contents?.map((content) => {
    return (
      <Content
        content_id={content.content_id}
        plan_id={content.plan_id}
        content={content.content}
        type={content.type}
        like_count={content.like_count}
        comment={content.comment}
        deleteContent={deleteContent}
        updateLikes={updateLikes}
      ></Content>
    );
  });

  return <div className="content-list">{contentComponents}</div>;
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
