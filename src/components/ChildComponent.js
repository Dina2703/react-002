import React from "react";

function ChildComponent({ greetParent }) {
  return (
    <div>
      {/* <button onClick={greetParent}>Greet Parent</button> */}
      <button onClick={() => greetParent("first")}>
        Greet Parent with a child name
      </button>
    </div>
  );
}

export default ChildComponent;
