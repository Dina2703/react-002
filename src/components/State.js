import React, { useState } from "react";

function State() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <h2>{isOpen ? "Hello visitor" : "Thank you for visiting"}</h2>
      <button onClick={() => setIsOpen((prev) => !prev)}>click</button>
    </div>
  );
}

export default State;
