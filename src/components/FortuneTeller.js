import React from "react";

const FortuneTeller = ({ fortune, auraColor, generateFortune }) => {
  return (
    <div class="result">
      <h2>Your personalised Fortune</h2>
    {!fortune ? 
    <span>
    <button onClick={generateFortune}>Click to see fortune</button></span>
    :(<p>{fortune}</p>) }
    </div>
  );
};


export default FortuneTeller;
