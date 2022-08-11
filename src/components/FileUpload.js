import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
// import axios from 'axios';
import "./FileUpload.css";
import axios from 'axios';

// const url = "http://127.0.0.1:5000";



const FileUpload =({submitContent, deleteContent, chosenPlan}) => {
 
  const uploadHandler = (event) => {
    console.log("handlercall")
    console.log(event.target.files[0])
    const { files } = event.target;
    if (files?.length) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = () => {
        const buffer = reader.result;
        submitContent(chosenPlan, {
          content: buffer, 
          type: files[0].type,
        });
      };
      reader.onerror = error => {
        console.error('Error: ', error); //eslint-disable-line
      };
    }
  }

  return (
    <div className="file-card">
      <div className="file-inputs">
        <input 
        name="file" 
        type="file" 
        onChange={uploadHandler}
        />
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