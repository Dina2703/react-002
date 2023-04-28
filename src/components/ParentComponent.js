import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const greetParent = (childName) => {
    alert("Hello parent from " + childName);
  };

  return <ChildComponent greetParent={greetParent} />;
}

export default ParentComponent;
