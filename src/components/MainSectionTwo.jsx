import React from "react";
import ResumeSummary from "./ResumeSummary";
import ResumeExperience from "./ResumeExperience";
import ResumeEducation from "./ResumeEducation";
import { nanoid } from "nanoid";

export default function MainSectionTwo(props) {
  const experinceElements = props.experience.map((exp) => (
    <ResumeExperience key={nanoid()} exp={exp} />
  ));

  const educationElements = props.education.map((edu) => (
    <ResumeEducation
      key={edu.id}
      school={edu.school}
      course={edu.course}
      from={edu.from}
      to={edu.to}
    />
  ));
  return (
    <div className="mainsection-two">
      <ResumeSummary summary={props.summary} summ={props.summ} />
      <h3>Work Experience</h3>
      {experinceElements}
      <hr />
      <h3>Education</h3>
      {educationElements}
      <hr />
    </div>
  );
}
