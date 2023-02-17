import React from "react";

const FortuneTeller = ({ fortune, auraColor, generateFortune }) => {
  return (
    <div class="result">
      <h2 className="fortune-h2">Your personalised Fortune</h2>
    {!fortune ? 
    <div className="effect-1" onClick={generateFortune}>
      <span>Read your fortune</span>
    </div>
    :(<p className="fortune">{fortune}</p>) }
    </div>
  );
};


export default FortuneTeller;
