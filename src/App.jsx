import React, { useState } from "react";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import "./App.css";
import { nanoid } from "nanoid";

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

  function handleChange2(e) {
    const { name, value } = e.target;
    setExpValue((prev) => ({
      ...prev,
      [name]: value,
      id: nanoid(),
    }));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setEducationValue((prev) => ({
      ...prev,
      [name]: value,
      id: nanoid(),
    }));
  }
  function handleAddSkill(e) {
    const { value } = e.target;
    setSkillValue({ name: value, id: nanoid() });
  }

  function handleAddHobby(e) {
    const { value } = e.target;
    setHobbyValue({ name: value, id: nanoid() });
  }

  function handleAddAward(e) {
    const { value } = e.target;
    setAwardValue({ name: value, id: nanoid() });
  }

  function handleAddRes(e) {
    const { value } = e.target;
    setResValue(value);
  }

  function handleAddSummary(e) {
    const { value } = e.target;
    setSummValue(value);
  }

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
        Project Resume Builder
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
        />
      </div>
    </>
  );
}
