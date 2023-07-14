import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ResumeSkills(props) {
  const styles = {
    display: props.close && "none",
  };

  //Delete Skill
  function deleteSkill(id) {
    props.setSkill((prev) => prev.filter((skl) => skl.id !== id));
  }

  return (
    <div className="resume-skills">
      <ul>
        <li>{props.name}</li>
      </ul>
      <FontAwesomeIcon
        icon={faTrash}
        className="skill-icon"
        onClick={() => deleteSkill(props.id)}
        style={styles}
      />
    </div>
  );
}
