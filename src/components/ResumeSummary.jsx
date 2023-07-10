import React from "react";

export default function ResumeSummary(props) {
  return (
    <div className="resume-summary">
      <h3>Profile Summary</h3>
      <p className="profile-summary">{props.summ}</p>
      <hr />
    </div>
  );
}
