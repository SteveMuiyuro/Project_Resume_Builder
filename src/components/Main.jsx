import React from "react";
import MainSectionOne from "./MainSectionOne";
import MainSectionTwo from "./MainSectionTwo";

export default function Main(props) {
  function handleEdit() {
    props.setClose((prev) => !prev);
  }

  const styles = {
    display: !props.close && "none",
  };
  return (
    <div className="main">
      <button className="edit-btn" style={styles} onClick={handleEdit}>
        Edit
      </button>
      <MainSectionOne
        fullname={props.fullname}
        title={props.title}
        cell={props.cell}
        email={props.email}
        linkedIn={props.linkedIn}
        skill={props.skill}
        hobby={props.hobby}
        award={props.award}
        close={props.close}
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
      />
    </div>
  );
}
