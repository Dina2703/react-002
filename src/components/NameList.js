import React from "react";

function NameList() {
  const names = ["Bruce", "Clark", "Diana"];
  return (
    <div>
      {names.map((name) => (
        <h3 key={name}>{name}</h3>
      ))}
    </div>
  );
}

export default NameList;
