import React, { useState } from "react";
import Card from './Card';

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
      <div className="cards">
        <span onClick={() => handleStyleSelection("riddle")}>
          <Card front={""} backText={"Riddle"}/>
        </span>
        <span onClick={() => handleStyleSelection("mystic")}>
          <Card front={""} backText={"Mystic"}/>
        </span>
        <span onClick={() => handleStyleSelection("honest")}>
          <Card front={""} backText={"Dark"}/>
        </span>
        <span onClick={() => handleStyleSelection("inspiring")}>
          <Card front={""} backText={"Inspiring"}/>
        </span>
      </div>
    </div>
  );
};

export default FortuneStyle;
