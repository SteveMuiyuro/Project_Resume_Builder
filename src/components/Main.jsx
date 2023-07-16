import React, { useState } from "react";
import MainSectionOne from "./MainSectionOne";
import MainSectionTwo from "./MainSectionTwo";
import JsPDF from "jspdf";
import html2canvas from "html2canvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export default function Main(props) {
  const [download, setDownload] = useState(false);

  function handleEdit() {
    props.setClose((prev) => !prev);
  }

  const styles = {
    display: !props.close ? "none" : download ? "none" : "",
    color: props.close && "#135d96",
  };

  const handleDownload = () => {
    setDownload((prev) => !prev);
    const capture = document.querySelector(".main");
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new JsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      setDownload(false);
      doc.save("Resume.pdf");
    });
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

      {props.close && (
        <button
          className="download-btn"
          onClick={handleDownload}
          disabled={download}
        >
          {download ? "Downloading" : "Download Resume"}
        </button>
      )}
    </div>
  );
}
