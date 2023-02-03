import React, { useState } from "react";

const AuraColor = ({ setAuraColor }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorSelection = (color) => {
    setSelectedColor(color);
    setAuraColor(color);
  };

  return (
    <div>
      <h2>Select Aura Color</h2>
      <div>
        <div style={{ backgroundColor: "red" }} onClick={() => handleColorSelection("red")}>red</div>
        <div style={{ backgroundColor: "orange" }} onClick={() => handleColorSelection("orange")}>orange</div>
        <div style={{ backgroundColor: "yellow" }} onClick={() => handleColorSelection("yellow")}>yellow</div>
        <div style={{ backgroundColor: "green" }} onClick={() => handleColorSelection("green")}>green</div>
        <div style={{ backgroundColor: "blue" }} onClick={() => handleColorSelection("blue")}>blue</div>
        <div style={{ backgroundColor: "purple" }} onClick={() => handleColorSelection("purple")}>purple</div>
      </div>
    </div>
  );
};

export default AuraColor;