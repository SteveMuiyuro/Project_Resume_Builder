import React from "react";
import PersonalDetails from "./PersonalDetails";
import Skills from "./Skills";
import Hobbies from "./Hobbies";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Awards from "./Awards";
import Summary from "./Summary";

export default function SideBar(props) {
  let styles = {
    display: !props.close ? "grid" : "none",
  };
  function handleClose() {
    props.setClose((prev) => !prev);
  }
  return (
    <div className="sidebar" style={styles}>
      <button className="close-btn" onClick={handleClose}>
        x
      </button>
      <div className="sidebar-one">
        <PersonalDetails
          PersonalData={props.PersonalData}
          setPersonalData={props.setPersonalData}
        />
        <Skills
          handleAddSkill={props.handleAddSkill}
          setSkill={props.setSkill}
          skillValue={props.skillValue}
          skill={props.skill}
        />
        <Hobbies
          handleAddHobby={props.handleAddHobby}
          hobbyValue={props.hobbyValue}
          setHobby={props.setHobby}
          hobby={props.hobby}
        />
        <Awards
          handleAddAward={props.handleAddAward}
          awardValue={props.awardValue}
          setAward={props.setAward}
          award={props.award}
        />
      </div>
      <div className="sidebar-two">
        <Summary
          summaryValue={props.summaryValue}
          summaryHolder={props.summaryHolder}
          setSumm={props.setSumm}
          handleAddSummary={props.handleAddSummary}
          summValue={props.summValue}
          summ={props.summ}
        />
        <WorkExperience
          companyHolder={props.companyHolder}
          roleHolder={props.roleHolder}
          roleFromHolder={props.roleFromHolder}
          roleToHolder={props.roleToHolder}
          roleDutiesHolder={props.roleDutiesHolder}
          onChange2={props.onChange2}
          experience={props.experience}
          setExperience={props.setExperience}
          expValue={props.expValue}
          handleAddRes={props.handleAddRes}
          resValue={props.resValue}
          setResValue={props.setResValue}
        />
        <Education
          education={props.education}
          setEducation={props.setEducation}
          onChange={props.onChange}
          educationValue={props.educationValue}
        />
      </div>
    </div>
  );
}
