import React, { useState } from "react";

const FortuneStyle = ({ onStyleSelection }) => {
  const [selectedStyle, setSelectedStyle] = useState(null);

  const handleStyleSelection = (style) => {
    setSelectedStyle(style);
    if (typeof onStyleSelection === "function") {
      onStyleSelection(style);
    }
  };

  return (
    <div>
      <h2>Select Fortune Style</h2>
      <div>
        <button onClick={() => handleStyleSelection("riddle")}>Riddle</button>
        <button onClick={() => handleStyleSelection("mystical")}>Mystical</button>
        <button onClick={() => handleStyleSelection("honest")}>Dark</button>
        <button onClick={() => handleStyleSelection("inspiring")}>Inspiring</button>
      </div>
    </div>
  );
};

export default FortuneStyle;
