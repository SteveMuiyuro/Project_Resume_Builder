import React, { useRef } from "react";

export default function Awards(props) {
  const awardInputField = useRef();

  //Add unique award to the award state array
  function handleClickAdd() {
    let fieldValue = awardInputField.current.value;
    if (fieldValue && !props.award.includes(fieldValue)) {
      props.setAward((prev) => [...prev, props.awardValue]);
    }
    awardInputField.current.value = "";
  }
  return (
    <div className="Awards">
      <p className="awards-info">Update Awards Info:</p>
      <label htmlFor="awards">Awards:</label>
      <div className="awards-input-section">
        <input
          type="text"
          id="awards"
          placeholder="Enter Awards"
          className="personal-inputs"
          ref={awardInputField}
          onChange={props.handleAddAward}
        />
        <span>Add Award</span>
        <button className="add-award-btn" onClick={handleClickAdd}>
          +
        </button>
      </div>
    </div>
  );
}
