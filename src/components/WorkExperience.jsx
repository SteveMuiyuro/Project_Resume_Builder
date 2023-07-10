import React, { useRef } from "react";

export default function WorkExperience(props) {
  const resInputField = useRef();
  const compInputField = useRef();
  const roleInputField = useRef();
  const roleFromField = useRef();
  const roleToField = useRef();

  function addExperience() {
    props.setExperience((prev) => prev.concat(props.expValue));
    clearInfo();
    console.log(props.experience);
  }

  function clearInfo() {
    compInputField.current.value = "";
    roleInputField.current.value = "";
    roleFromField.current.value = "";
    roleToField.current.value = "";
    resInputField.current.value = "";
  }

  return (
    <div className="work-experience-info">
      <p className="personal-info-title">Update Work Experience Details:</p>
      <label htmlFor="company">Company Name:</label>
      <input
        type="text"
        id="company"
        placeholder="Company Name"
        className="personal-inputs"
        onChange={props.onChange2}
        name="company"
        ref={compInputField}
      />
      <label htmlFor="job_role">Job Role:</label>
      <input
        type="text"
        id="job-role"
        placeholder="Enter Job Title"
        className="personal-inputs"
        onChange={props.onChange2}
        name="jobRole"
        ref={roleInputField}
      />

      <label htmlFor="fromDate">From:</label>
      <input
        type="date"
        id="date"
        placeholder="Enter Job Title"
        className="personal-inputs"
        onChange={props.onChange2}
        name="from"
        ref={roleFromField}
      />
      <label htmlFor="date">To:</label>
      <input
        type="date"
        id="toDate"
        placeholder="Enter Job Title"
        className="personal-inputs"
        onChange={props.onChange2}
        name="to"
        ref={roleToField}
      />
      <div className="responsibilities-info" id="responsibilities-info">
        <label htmlFor="responsibilities">Responsibilties:</label>
        <textarea
          id="responsibilities"
          placeholder="Enter Responsibilities"
          className="personal-inputs"
          onChange={props.onChange2}
          name="roles"
          ref={resInputField}
        />
      </div>

      <span>Add Company Info:</span>
      <button className="add-work-experience-btn" onClick={addExperience}>
        +
      </button>
    </div>
  );
}
