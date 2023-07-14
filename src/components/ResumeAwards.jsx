import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ResumeAwards(props) {
  const styles = {
    display: props.close && "none",
  };
  //Delete specified award
  function deleteAward(id) {
    props.setAward((prev) => prev.filter((awd) => awd.id !== id));
  }
  return (
    <div className="resume-awards">
      <ul>
        <li>{props.name}</li>
      </ul>
      <FontAwesomeIcon
        icon={faTrash}
        className="skill-icon"
        onClick={() => deleteAward(props.id)}
        style={styles}
      />
    </div>
  );
}
