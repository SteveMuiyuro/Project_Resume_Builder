import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ResumeHobbies(props) {
  const styles ={
    display: props.close && "none"
  }
  function deleteHobby(id) {
    props.setHobby((prev) => prev.filter((hby) => hby.id !== id));
  }
  return (
    <div className="hobbies-skills">
      <ul>
        <li>{props.name}</li>
      </ul>
      <FontAwesomeIcon
        icon={faTrash}
        className="skill-icon"
        onClick={() => deleteHobby(props.id)}
        style={styles}
      />
    </div>
  );
}
