import React from "react";

const FortuneTeller = ({ fortune, auraColor, generateFortune }) => {
  return (
    <div>
      <h2>Your Customized Fortune</h2>
      <p>{fortune}</p>
      <p>Aura Color: {auraColor}</p>
      <button onClick={generateFortune}>Generate Fortune</button>
    </div>
  );
};


export default FortuneTeller;
