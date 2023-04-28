import React from "react";

function Props(props) {
  //props.name = 'test' //CAN NOT change the prop value, it will case an error.
  return (
    <div>
      <p>Prop value is {props.name}</p>
      {props.children}
    </div>
  );
}

export default Props;
