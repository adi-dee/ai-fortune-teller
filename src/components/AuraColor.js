import React, { useState } from "react";
import Card from './Card';

const AuraColor = ({ setAuraColor }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorSelection = (color) => {
    setSelectedColor(color);
    setAuraColor(color);
  };

  return (
        <div className="cards color-cards">
        <h2>Select Your Aura Color</h2>
        <div>   
          <span style={{ color: "red" }} onClick={() => handleColorSelection("red")}>
          <Card front={""} backText={"Red"}/>
          </span>
          <span style={{ color: "Blue" }} onClick={() => handleColorSelection("blue")}>
            <Card front={""} backText={"Blue"}/>
          </span>
          <span style={{ color: "#FFF05A" }}  onClick={() => handleColorSelection("yellow")}>
            <Card front={""} backText={"Yellow"}/>
          </span>
          <span style={{ color: "Green" }} onClick={() => handleColorSelection("green")}>
            <Card front={""} backText={"Green"}/>
          </span>
          <span  style={{ color: "Orange" }}  onClick={() => handleColorSelection("orange")}>
            <Card front={""} backText={"Orange"}/>
          </span>
  
          </div>
      </div>
  );
};

export default AuraColor;