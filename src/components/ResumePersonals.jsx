import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export default function ResumePersonals(props) {
  const [path, setPath] = useState();
  const imageFile = useRef();

  //Delete personal info dispayed on resume
  function deletePersonalInfo() {
    props.setPersonalData([]);

    props.setLinkedInLink(false);
  }

  //Fetch image path from local storage
  function handleChange() {
    setPath(URL.createObjectURL(imageFile.current.files[0]));
  }

  const styles = {
    display: props.close && "none",
  };

  const styles2 = {
    display: props.close ? "none" : !props.linkedInLink ? "none" : "",
  };

  return (
    <div className="personals">
      <img className="image" src={path} alt="profile picture" />

      <label htmlFor="update" className="update" style={styles}>
        Update Photo
      </label>

      <input
        className="input-update"
        id="update"
        type="file"
        accept="image/png, image/jpeg"
        ref={imageFile}
        onChange={handleChange}
        style={styles}
      />
      <div className="personal-content-display">
        <div className="updated-personals">
          <p className="name-value">{props.fullname}</p>
          <p className="title-value">{props.title}</p>
          <p className="cell-value">{props.cell}</p>
          <p className="email-value">{props.email}</p>
          {props.linkedInLink && <a href={`${props.linkedIn}`}>LinkedIn</a>}
        </div>
        <FontAwesomeIcon
          icon={faTrash}
          className="delete-exp"
          onClick={deletePersonalInfo}
          style={styles2}
        />
      </div>
      <hr className="style-one" />
    </div>
  );
}
