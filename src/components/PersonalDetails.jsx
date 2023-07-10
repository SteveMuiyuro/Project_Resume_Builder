import React, { useRef } from "react";

export default function PersonalDetails(props) {
  const nameValue = useRef();
  const titleValue = useRef();
  const cellValue = useRef();
  const emailValue = useRef();
  const linkinValue = useRef();

  function handleClick() {
    props.setPersonalData({
      fullname: nameValue.current.value,
      title: titleValue.current.value,
      cell: cellValue.current.value,
      email: emailValue.current.value,
      linkedIn: linkinValue.current.value,
    });

    clear();
    console.log(props.PersonalData);
  }

  function clear() {
    nameValue.current.value = "";
    titleValue.current.value = "";
    cellValue.current.value = "";
    emailValue.current.value = "";
    linkinValue.current.value = "";
  }
  return (
    <div className="personal-info">
      <p className="personal-info-title">Update Personal Details:</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Enter Name"
          className="personal-inputs"
          ref={nameValue}
        />
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          placeholder="Enter Title e.g Frontend Developer"
          className="personal-inputs"
          ref={titleValue}
        />
        <label htmlFor="cell">Cell:</label>
        <input
          type="text"
          id="cell"
          placeholder="Enter Phone Number"
          className="personal-inputs"
          ref={cellValue}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter Email Address"
          className="personal-inputs"
          ref={emailValue}
        />
        <label htmlFor="linkedIn">LinkedIn Url:</label>
        <input
          type="text"
          id="linkedIn"
          placeholder="Enter LinkedIn url Link"
          className="personal-inputs"
          ref={linkinValue}
        />
      </form>
      <button className="info-btn" onClick={handleClick}>
        + Add Info
      </button>
    </div>
  );
}
