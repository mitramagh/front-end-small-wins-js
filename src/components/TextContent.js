import React from "react";
// import {props} from "./Content"
import Content from "./Content"




const TextContent=({ content, deleteContent, updateLikes }) => {

    return (
        <div className="textcontent">
            {content}
            {/* <Content 
            content_type={content.content_type}
            like_count={content.like_count}
            comment={content.comment}
            deleteContent={deleteContent}
            updateLikes={updateLikes}
            /> */}
        </div>
        
    )
}

export default TextContent;