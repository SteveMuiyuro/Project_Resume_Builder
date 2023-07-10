import React from "react";

export default function ResumeHobbies(props) {
  return (
    <div className="hobbies-skills">
      <h4>Hobbies</h4>
      <ul>
        {props.hobbiesAquired}
      </ul>
    </div>
  );
}
