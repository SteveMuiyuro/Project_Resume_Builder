import React, { useState } from "react";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import "./App.css";
import { nanoid } from "nanoid";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { PDFDownloadLink } from "@react-pdf/renderer";

export default function App() {
  const [PersonalData, setPersonalData] = useState([]);
  const [educationValue, setEducationValue] = useState([
    {
      school: "",
      course: "",
      from: "",
      to: "",
    },
  ]);

  const [linkedInLink, setLinkedInLink] = useState(false);

  const [expValue, setExpValue] = useState([]);
  const [close, setClose] = useState(false);

  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  const [skill, setSkill] = useState([]);
  const [skillValue, setSkillValue] = useState({});

  const [hobby, setHobby] = useState([]);
  const [hobbyValue, setHobbyValue] = useState({});

  const [award, setAward] = useState([]);
  const [awardValue, setAwardValue] = useState({});

  const [resValue, setResValue] = useState("");

  const [summ, setSumm] = useState("");
  const [summValue, setSummValue] = useState("");

  // Collect data from experience input field and save it as a state variable
  function handleChange2(e) {
    const { name, value, type, checked } = e.target;
    setExpValue((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
      id: nanoid(),
    }));
  }
  // Collect data from education input field and save it as a state variable
  function handleChange(e) {
    const { name, value } = e.target;
    setEducationValue((prev) => ({
      ...prev,
      [name]: value,
      id: nanoid(),
    }));
  }

  // Collect data from skillinput field and save it as a state variable
  function handleAddSkill(e) {
    const { value } = e.target;
    setSkillValue({ name: value, id: nanoid() });
  }
  // Collect data from hobby input field and save it as a state variable
  function handleAddHobby(e) {
    const { value } = e.target;
    setHobbyValue({ name: value, id: nanoid() });
  }
  // Collect data from award input field and save it as a state variable
  function handleAddAward(e) {
    const { value } = e.target;
    setAwardValue({ name: value, id: nanoid() });
  }
  // Collect data from responsibilities input field and save it as a state variable
  function handleAddRes(e) {
    const { value } = e.target;
    setResValue(value);
  }
  //Collect data from summary input field and save it as a state variable
  function handleAddSummary(e) {
    const { value } = e.target;
    setSummValue(value);
  }

  //Conditional styling when the resume input fields section is closed
  const styles = {
    display: close && "flex",
    justifyContent: close && "center",
    alignItems: close && "center",
    maxWidth: close && "40em",
    margin: "0 auto",
  };

  const style2 = {
    display: close && "none",
  };

  return (
    <>
      <h2 className="heading" style={style2}>
        One Page Resume Builder
      </h2>
      <div className="app-container" style={styles}>
        <SideBar
          PersonalData={PersonalData}
          setPersonalData={setPersonalData}
          education={education}
          setEducation={setEducation}
          educationValue={educationValue}
          summaryHolder="summary"
          companyHolder="company"
          roleHolder="role"
          roleFromHolder="roleFrom"
          roleToHolder="roleTo"
          roleDutiesHolder="roleDuties"
          experience={experience}
          setExperience={setExperience}
          onChange={handleChange}
          onChange2={handleChange2}
          handleAddSkill={handleAddSkill}
          handleAddHobby={handleAddHobby}
          handleAddAward={handleAddAward}
          handleAddRes={handleAddRes}
          handleAddSummary={handleAddSummary}
          setSkill={setSkill}
          setHobby={setHobby}
          setAward={setAward}
          setSumm={setSumm}
          setSummValue={setSummValue}
          setResValue={setResValue}
          skillValue={skillValue}
          hobbyValue={hobbyValue}
          awardValue={awardValue}
          summValue={summValue}
          resValue={resValue}
          skill={skill}
          hobby={hobby}
          award={award}
          expValue={expValue}
          summ={summ}
          setClose={setClose}
          close={close}
          setLinkedInLink={setLinkedInLink}
        />

        <Main
          fullname={PersonalData.fullname}
          title={PersonalData.title}
          cell={PersonalData.cell}
          email={PersonalData.email}
          linkedIn={PersonalData.linkedIn}
          setClose={setClose}
          close={close}
          skill={skill}
          setSkill={setSkill}
          setHobby={setHobby}
          setAward={setAward}
          hobby={hobby}
          award={award}
          experience={experience}
          summ={summ}
          education={education}
          setExperience={setExperience}
          setEducation={setEducation}
          setSumm={setSumm}
          linkedInLink={linkedInLink}
          setLinkedInLink={setLinkedInLink}
          setPersonalData={setPersonalData}
        />
      </div>
    </>
  );
}
