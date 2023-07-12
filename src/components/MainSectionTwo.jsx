import React from "react";
import ResumeSummary from "./ResumeSummary";
import ResumeExperience from "./ResumeExperience";
import ResumeEducation from "./ResumeEducation";

export default function MainSectionTwo(props) {
  const experinceElements = props.experience.map((exp) => (
    <ResumeExperience
      key={exp.id}
      id={exp.id}
      exp={exp}
      setExperience={props.setExperience}
      close={props.close}
    />
  ));

  const educationElements = props.education.map((edu) => (
    <ResumeEducation
      key={edu.id}
      id={edu.id}
      school={edu.school}
      course={edu.course}
      from={edu.from}
      to={edu.to}
      setEducation={props.setEducation}
      close={props.close}
    />
  ));
  return (
    <div className="mainsection-two">
      <ResumeSummary
        summary={props.summary}
        summ={props.summ}
        setSumm={props.setSumm}
        close={props.close}
      />
      <h3>Work Experience</h3>
      {experinceElements}
      <hr />
      <h3>Education</h3>
      {educationElements}
      <hr />
    </div>
  );
}
