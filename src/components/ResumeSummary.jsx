import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ResumeSummary(props) {
  const styles = {
    display: props.close ? "none" : !props.summ ? "none" : "",
  };

  function deleteSummary() {
    props.setSumm("");
  }
  return (
    <div className="resume-summary">
      <h3>Profile Summary</h3>
      <div className="summary-content">
        <p className="profile-summary">{props.summ}</p>
        <FontAwesomeIcon
          icon={faTrash}
          className="delete-edu"
          onClick={deleteSummary}
          style={styles}
        />
      </div>

      <hr />
    </div>
  );
}
