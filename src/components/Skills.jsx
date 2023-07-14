import React, { useRef } from "react";
export default function Skills(props) {
  const skillsInputField = useRef();

  //Add unique skill to the skill state array
  function handleClickAdd() {
    let fieldValue = skillsInputField.current.value;
    if (skillsInputField && !props.skill.includes(fieldValue)) {
      props.setSkill((prev) => [...prev, props.skillValue]);
    }
    skillsInputField.current.value = "";
  }

  return (
    <div className="skills">
      <p className="skills-info">Update Skills Info:</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="skill">Skill:</label>
        <div className="skill-input-section">
          <input
            type="text"
            id="skill"
            placeholder="Enter Skill"
            className="personal-inputs"
            onChange={props.handleAddSkill}
            ref={skillsInputField}
          />
          <span>Add Skill</span>
          <button className="add-skill-btn" onClick={handleClickAdd}>
            +
          </button>
        </div>
      </form>
    </div>
  );
}
