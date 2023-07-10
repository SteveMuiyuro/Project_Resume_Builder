import React from "react";

export default function ResumeExperience(props) {
  const styles = {
    fontWeight: "550",
  };
  return (
    <div className="resume-work">
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
      <hr />
    </div>
  );
}
