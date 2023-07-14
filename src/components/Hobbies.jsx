import React, { useRef } from "react";

export default function Hobbies(props) {
  const hobbyInputField = useRef();

  //Add unique hobby to the hobby array
  function handleClickAdd() {
    let fieldValue = hobbyInputField.current.value;
    if (hobbyInputField && !props.hobby.includes(fieldValue)) {
      props.setHobby((prev) => [...prev, props.hobbyValue]);
    }
    hobbyInputField.current.value = "";
  }

  return (
    <div className="Hobbies">
      <p className="hobbies-info">Update Hobbies Info:</p>
      <label htmlFor="hobbies">Interests:</label>
      <div className="hobbies-input-section">
        <input
          type="text"
          id="hobbies"
          placeholder="Enter Hobby"
          className="personal-inputs"
          onChange={props.handleAddHobby}
          ref={hobbyInputField}
        />
        <span>Add Hobby</span>
        <button className="add-hobby-btn" onClick={handleClickAdd}>
          +
        </button>
      </div>
    </div>
  );
}
