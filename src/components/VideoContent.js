import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import Content from "./Content";

const VideoContent = ({ content, deleteContent, updateLikes }) => {
  const [videoFilePath, setVideoFilePath] = useState(null);

  const handleVideoUpload = (event) => {
    setVideoFilePath(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className="Videocontent">
      {/* <input type="file" onChange={handleVideoUpload} /> */}
      <ReactPlayer
        // url='https://www.youtube.com/watch?v=BSBEUcAyFyk'
        url={content}
        width="100%"
        height="100%"
        controls={true}
      />

      {/* <Content 
            type={content.type}
            like_count={content.like_count}
            comment={content.comment}
            deleteContent={deleteContent}
            updateLikes={updateLikes}
            /> */}
    </div>
  );
};

export default VideoContent;
