import React from "react";
// import {props} from "./Content"
import Content from "./Content"




const TextContent=({ content, deleteContent, updateLikes }) => {

    return (
        <div className="textcontent">
            <span>{content}</span>
            {content}
            deleteContent={deleteContent}
            updateLikes={updateLikes}
            {/* <Content 
            content_type={content.content_type}
            like_count={content.like_count}
            comment={content.comment}
            /> */}
        </div>
        
    )
}

export default TextContent;