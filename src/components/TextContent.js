import React from "react";
// import {props} from "./Content"
import Content from "./Content";

const TextContent = ({ content, deleteContent, updateLikes }) => {
  return (
    <div className="textcontent">
      <span>{content}</span>
     
      
      {/* <Content 
            type={content.type}
            like_count={content.like_count}
            comment={content.comment}
            /> */}
    </div>
  );
};

export default TextContent;
