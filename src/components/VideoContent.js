import React from "react";
import ReactPlayer from 'react-player/youtube'
import Content from "./Content"



const VideoContent=({ content, deleteContent, updateLikes }) => {

    return (
        <div className="Videocontent">
            {content}
            <ReactPlayer url='https://www.youtube.com/watch?v=BSBEUcAyFyk' />
            {/* <Content 
            content_type={content.content_type}
            like_count={content.like_count}
            comment={content.comment}
            deleteContent={deleteContent}
            updateLikes={updateLikes}
            /> */}
            {/* <button id="videoplayer" onClick={() => props.playVideo(props.content_id)}> P </button> */}
        </div>
    )
}

export default VideoContent;