import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ResumeEducation(props) {
  const styles = {
    display: props.close && "none",
  };

  //Delete specified education entry
  function deleteEducation(id) {
    props.setEducation((prev) =>
      prev.filter((education) => education.id !== id)
    );
  }
  return (
    <div className="resume-education">
      <div className="edu-content">
        <div>
          <p className="education-school">{props.school}</p>
          <p className="work-role">{props.course}</p>
          <span>From: </span>
          <span>{props.from}</span> <span>To: </span>
          <span>{props.to}</span>
        </div>
        <FontAwesomeIcon
          icon={faTrash}
          className="delete-edu"
          onClick={() => deleteEducation(props.id)}
          style={styles}
        />
      </div>
      <hr />
    </div>
  );
}
