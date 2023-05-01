import { useState } from "react";
export const Form = () => {
  const [fName, setfName] = useState("");
  const [isMarried, setIsMarried] = useState("");

  const options = ["yes", "no", "other"];

  function handleInput(e) {
    setfName(e.target.value);
    console.log(fName);
  }

  function handleOption(e) {
    setIsMarried(e.target.value);
    console.log(isMarried);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form is submitted", `${fName} has picked ${isMarried}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          value={fName}
          onChange={handleInput}
        />
        <br />
        <label htmlFor="isMarried">Married</label>
        <select id="isMarried" onChange={handleOption} value={isMarried}>
          <option defaultValue>Select one</option>
          {options.map((option, index) => {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
