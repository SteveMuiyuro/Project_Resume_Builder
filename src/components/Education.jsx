import React, { useRef } from "react";

export default function Education(props) {
  const schoolValue = useRef();
  const courseValue = useRef();
  const fromValue = useRef();
  const toValue = useRef();

  function handleClick() {
    props.setEducation((prev) => prev.concat(props.educationValue));
    clear();
  }

  function clear() {
    schoolValue.current.value = "";
    courseValue.current.value = "";
    fromValue.current.value = "";
    toValue.current.value = "";
  }
  return (
    <div className="education-info">
      <p className="personal-info-title">Update Education Details:</p>
      <label htmlFor="company">School:</label>
      <input
        type="text"
        id="school"
        placeholder="Enter School"
        className="personal-inputs"
        name="school"
        onChange={props.onChange}
        ref={schoolValue}
      />
      <label htmlFor="course">Course:</label>
      <input
        type="text"
        id="course"
        name="course"
        placeholder="Enter Course"
        className="personal-inputs"
        onChange={props.onChange}
        ref={courseValue}
      />

      <label htmlFor="fromDate">From:</label>
      <input
        type="date"
        id="date"
        className="personal-inputs"
        onChange={props.onChange}
        name="from"
        ref={fromValue}
      />
      <label htmlFor="date">To:</label>
      <input
        type="date"
        id="toDate"
        className="personal-inputs"
        name="to"
        onChange={props.onChange}
        ref={toValue}
      />

      <span>Add Education:</span>
      <button className="add-education-btn" onClick={handleClick}>
        +
      </button>
    </div>
  );
}
