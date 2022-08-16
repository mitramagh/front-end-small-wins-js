// import axios from "axios";
import React from "react";
import "./Content.css";
import PropTypes from "prop-types";
import TextContent from "./TextContent";
import AudioContent from "./AudioContent";
import VideoContent from "./VideoContent";

const EnumContentType = {
  TEXT: "text",
  IMAGE: "image",
  AUDIO: "audio",
  VIDEO: "video",
};

const Content = ({
  content_id,
  plan_id,
  content,
  type,
  like_count,
  comment,
  deleteContent,
  updateLikes,
  // commentForContent,
}) => {
  const contentType = type?.toLowerCase() || "";
  console.log(contentType);
  return (
      <div className="content-container">
        <div className='eachcontent'>
          {contentType === EnumContentType.VIDEO && (
            <VideoContent content={content} />
          )}
          {contentType === EnumContentType.AUDIO && (
            <AudioContent content={content} />
          )}
          {contentType === EnumContentType.TEXT && (
            <TextContent content={content} />
          )}
          {contentType.includes("pdf") && (
            <embed
              className="form-control"
              src={`data:application/pdf;${content}`}
              id="pdf"
            />
          )}
          {contentType.includes("image") && <img src={content} />}
          {!contentType && <p>No Content Found</p>}
      </div>
      <div className="buttons">
        <button className='likebutton' id="likeCount" onClick={() => updateLikes(content_id)}>
              {like_count} ❤️{" "}
        </button>
        {/* <button id="commentForContent" onsubmit={() => commentForContent(content_id)}></button> */}
        <button  className='deletebutton'id="deleteContent" onClick={() => deleteContent(content_id)}>
          X
        </button>
      </div>
      {/* <h2>{content}</h2> */}
    </div>
  );
};
Content.propTypes = {
  content_id: PropTypes.number.isRequired,
  plan_id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  // like-count: PropTypes.number.isRequired,
  // deleteContent: PropTypes.func.isRequired,
  // updateLikes: PropTypes.func.isRequired,
};

export default Content;
