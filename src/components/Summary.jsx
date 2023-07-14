import React, { useRef } from "react";

export default function Summary(props) {
  const inputValue = useRef();

  // Set state to the value of input value
  function handleClick() {
    props.setSumm(props.summValue);
    inputValue.current.value = "";
  }

  return (
    <div className="summary-info">
      <p className="personal-info-title">Update Summary:</p>
      <label htmlFor="summary">Summary:</label>
      <textarea
        id="summary"
        placeholder="Profile Summary"
        className="personal-inputs"
        name={props.summaryHolder}
        onChange={props.handleAddSummary}
        ref={inputValue}
      />
      <button className="addSummary-btn" onClick={handleClick}>
        {" "}
        + Add Summary
      </button>
    </div>
  );
}
