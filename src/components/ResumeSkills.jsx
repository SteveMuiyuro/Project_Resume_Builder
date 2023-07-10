import React from "react";

export default function ResumeSkills({ skillsAquired }) {
  return (
    <div className="resume-skills">
      <h4>Skills</h4>
      <ul>{skillsAquired}</ul>
    </div>
  );
}
