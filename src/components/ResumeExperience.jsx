import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ResumeExperience(props) {
  const styles = {
    fontWeight: "550",
  };

  const styles2 = {
    display: props.close && "none",
  };

  function deleteRole(id) {
    props.setExperience((prev) =>
      prev.filter((experience) => experience.id !== id)
    );
  }

  return (
    <div className="resume-work">
      <div className="exp-content">
        <div>
          <p className="work-company" style={styles}>
            {props.exp.company}{" "}
          </p>
          <p className="work-role" style={styles}>
            {props.exp.jobRole}
          </p>
          <span style={styles}>From: </span>
          <span style={styles}>{props.exp.from}</span>
          <span> </span>
          <span style={styles}>To: </span>
          <span style={styles}>{props.exp.to}</span>
          <h4 style={styles}>Responsibilities:</h4>
          <p className="roleInfo">{props.exp.roles}</p>
        </div>
        <FontAwesomeIcon
          icon={faTrash}
          className="delete-exp"
          onClick={() => deleteRole(props.id)}
          style={styles2}
        />
      </div>
      <hr />
    </div>
  );
}
