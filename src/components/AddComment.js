import {useState} from 'react';
import "./AddComment.css";

const AddComment = ({handleAddComment}) => {
  const [commentText, setCommentText] = useState('');

  const handleChange=(event)=> {
    setCommentText(event.target.value);
    // const characterLimit = 200;
  }

  const handleSaveClick =()=> {
    if (commentText.trim().length>0){
    handleAddComment(commentText)
    setCommentText(commentText)
    }
  }
  return (
    <div className= 'commentforplans'>
        <textarea
          rows='8'
          cols='10'
          placeholder='Type to add a comment'
          value={commentText}
          onChange={handleChange}
        />
        <div className='comment-footer'>
        {/* { characterLimit - commentText.length} */}
          <small> 200 Reamining</small>
          <button className='save'onClick= {handleSaveClick}>Save</button>
        </div>
    </div>
  )
  
}

export default AddComment