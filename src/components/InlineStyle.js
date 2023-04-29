import React from "react";

function InlineStyle() {
  const heading = {
    fontSize: "72px",
    color: "blue",
    fontWeight: "bold",
  };
  return (
    <div>
      <div style={heading}>Inline Styling</div>
    </div>
  );
}

export default InlineStyle;
