import React from 'react';
import * as FaIcons from 'react-icons/fa';
// import axios from 'axios';
import "./FileUpload.css";

// const url = "http://127.0.0.1:5000";


const FileUpload =({planId, files, setFiles, deleteContent}) => {
  const uploadHandler = (event) => {
    const file=event.target.files[0];
    if (!file) return;
    file.isUploading=true;
    setFiles([...files, file])

    // const uploadData= new UploadData();
    // uploadData.push(
    // "newFile",
    // file,
    // file.name
    // )

    // axios.post(`${url}/plans/${planId}/contents`, uploadData)
    // .then((res)=>{
    //   file.isUploading=false;
    //   setFiles([...files, file])
    // })
    // .catch((err) => {
    //   console.log(err)
    // })
    // deleteContent(file.name)
  };


  return (
    <div className="file-card">
      <div className="file-inputs">
        <input type="file" onChange={uploadHandler}/>
        <button>
          <i>
            <FaIcons.FaPlus/> 
            {/* <p> Upload </p> */}
          </i>

        </button>
      </div>
      <p className="main">Support Files</p>
      <p className="info">PDF, JPG, PNG</p>

    </div>
  )
}

export default FileUpload;