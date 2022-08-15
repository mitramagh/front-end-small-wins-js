import React from "react";
import Content from "./Content";
import "./Content.css";

const TextContent = ({ content, deleteContent, updateLikes }) => {
  return (
    <div className="textcontent">
      <span>{content}</span>
    </div>
  );
};

export default TextContent;
