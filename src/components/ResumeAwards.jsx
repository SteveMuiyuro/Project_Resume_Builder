import React from "react";

export default function ResumeAwards(props) {
  return (
    <div className="resume-awards">
      <h4>Awards</h4>
      <ul>{props.awardsAquired}</ul>
    </div>
  );
}
