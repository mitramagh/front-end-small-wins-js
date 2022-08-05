import ReactAudioPlayer from 'react-audio-player';
import React from "react";
// import PropTypes from "prop-types";
import Content from "./Content"



const AudioContent= ({ content, deleteContent, updateLikes }) => {
  return (
      <div className="Audio">
          <ReactAudioPlayer 
          autoPlay 
          src="https://edge2.pod.npr.org/anon.npr-mp3/npr/pmoney/2021/03/20210319_pmoney_pmpod1072_v2.mp3/20210319_pmoney_pmpod1072_v2.mp3_7fa9a66c548caf8d234e606871a23281_22988561.mp3?orgId=1&topicId=1017&d=1466&p=510289&story=979274990&t=podcast&e=979274990&dl=1&sc=siteplayer&size=23457211&awCollectionId=510289&awEpisodeId=979274990&dl=1&aw_0_1st.playerid=siteplayer&hash_redirect=1&x-total-bytes=22988561&x-ais-classified=streaming&listeningSessionID=0CD_382_216__e6b1343db6276ac3fc2e3bb5d8a984b6ab8e66af" 
          onPlay={e => console.log("onPlay")}
          controls />
          {/* <Content 
          content_type={content.content_type}
          like_count={content.like_count}
          comment={content.comment}
          deleteContent={deleteContent}
          updateLikes={updateLikes}
          /> */}
          <button> play this </button>

      </div>
);
  }

  export default AudioContent;