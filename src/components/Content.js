// import axios from "axios";
import React from "react";
import "./Content.css";
import PropTypes from "prop-types";
import TextContent from "./TextContent"
// import ImageContent from "./ImageContent"
import AudioContent from "./AudioContent"
import VideoContent from "./VideoContent"


const  EnumContentType = {TEXT:'text', IMAGE:'image', AUDIO:'audio', VIDEO:'video'}

const Content = ({
  content_id,
  Plan_id,
  content,
  content_type,
  like_count,
  comment,
  deleteContent,
  updateLikes,
})=> {

  return (
    <div className="Content">
      <TextContent {...Text}/>
      {/* <ImageContent {...Image}/> */}
      <AudioContent {...Audio}/>
      <VideoContent {...content}/>
      <button  id="likeCount" onClick={() => updateLikes(content_id)}>{like_count} ❤️ </button>
      <button id="deleteContent" onClick={() => deleteContent(content_id)}>X</button>
      {/* <h2>{content}</h2> */}
    </div>
  );
  }
Content.propTypes = {
  content_id: PropTypes.number.isRequired,
  plan_id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  content_type:PropTypes.string.isRequired,
  // likeCount: PropTypes.number.isRequired,
  // deleteContent: PropTypes.func.isRequired,
  // updateLikes: PropTypes.func.isRequired,
};

export default Content;

// {props.content_type===ContentType.TEXT && <TextContent {...props}/>}
//             {props.content_type===ContentType.IMAGE && <ImageContent {...props}/>}
//             {props.content_type===ContentType.AUDIO && <AudioContent id={0} title={""} {...props}/>}
//             {props.content_type===ContentType.VIDEO && <VideoContent {...props}/>}