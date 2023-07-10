import React from "react";

export default function ResumeEducation(props) {
  return (
    <div className="resume-education">
      <p className="education-school">{props.school}</p>
      <p className="work-role">{props.course}</p>
      <span>From: </span>
      <span>{props.from}</span> <span>To: </span>
      <span>{props.to}</span>
      <hr />
    </div>
  );
}
