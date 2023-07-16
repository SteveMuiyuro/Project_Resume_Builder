import React from "react";
import MainSectionOne from "./MainSectionOne";
import MainSectionTwo from "./MainSectionTwo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export default function Main(props) {
  function handleEdit() {
    props.setClose((prev) => !prev);
  }

  const styles = {
    display: !props.close ? "none" : props.download ? "none" : "",
    color: props.close && "#135d96",
  };

  return (
    <div className="main">
      <FontAwesomeIcon
        icon={faPen}
        style={styles}
        className="edit-btn"
        onClick={handleEdit}
      />

      <MainSectionOne
        fullname={props.fullname}
        title={props.title}
        cell={props.cell}
        email={props.email}
        linkedIn={props.linkedIn}
        skill={props.skill}
        setSkill={props.setSkill}
        setHobby={props.setHobby}
        setAward={props.setAward}
        hobby={props.hobby}
        award={props.award}
        close={props.close}
        linkedInLink={props.linkedInLink}
        setLinkedInLink={props.setLinkedInLink}
        setPersonalData={props.setPersonalData}
      />
      <MainSectionTwo
        summary={props.summary}
        company={props.company}
        role={props.role}
        roleFrom={props.roleFrom}
        roleTo={props.roleTo}
        roleDuties={props.roleDuties}
        experience={props.experience}
        responsibility={props.responsibility}
        summ={props.summ}
        education={props.education}
        setExperience={props.setExperience}
        setEducation={props.setEducation}
        setSumm={props.setSumm}
        close={props.close}
        linkedInLink={props.linkedInLink}
      />
    </div>
  );
}
