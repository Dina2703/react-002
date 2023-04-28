import React from "react";

function EventHandler() {
  //automatically gets passed 'event' argument. And we can add other argument if necessary.Here when we click 5 gets passed as value to 'count'
  function handleClick(e, count = 1) {
    console.log("button clicked", count, e);
  }
  return (
    <div>
      <h2>Event handler</h2>
      <button onClick={handleClick}>Click</button>
      <button onClick={(e) => handleClick(e, 5)}>Click 5</button>
    </div>
  );
}

export default EventHandler;
