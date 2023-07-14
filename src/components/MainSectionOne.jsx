import React, { Fragment, useState } from "react";
import ResumePersonals from "./ResumePersonals";
import ResumeSkills from "./ResumeSkills";
import ResumeHobbies from "./ResumeHobbies";
import ResumeAwards from "./ResumeAwards";

export default function MainSectionOne(props) {
  const skillsAquired =
    props.skill.length > 0 &&
    props.skill.map((skl) => (
      <ResumeSkills
        key={skl.id}
        id={skl.id}
        setSkill={props.setSkill}
        name={skl.name}
        close={props.close}
      />
    ));

  const hobbiesAquired =
    props.hobby.length > 0 &&
    props.hobby.map((hby) => (
      <ResumeHobbies
        key={hby.id}
        id={hby.id}
        setHobby={props.setHobby}
        name={hby.name}
        close={props.close}
      />
    ));

  const awardsAquired =
    props.award.length > 0 &&
    props.award.map((awd) => (
      <ResumeAwards
        key={awd.id}
        id={awd.id}
        setAward={props.setAward}
        name={awd.name}
        close={props.close}
      />
    ));

  return (
    <div className="mainsection-one">
      <ResumePersonals
        fullname={props.fullname}
        title={props.title}
        email={props.email}
        cell={props.cell}
        linkedIn={props.linkedIn}
        close={props.close}
        linkedInLink={props.linkedInLink}
        setLinkedInLink={props.setLinkedInLink}
        setPersonalData={props.setPersonalData}
      />
      <h4>Skills</h4>
      {skillsAquired}
      <hr className="style-one" />
      <h4>Hobbies</h4>
      {hobbiesAquired}
      <hr className="style-one" />
      <h4>Awards</h4>
      {awardsAquired}
      <hr className="style-one" />
    </div>
  );
}
