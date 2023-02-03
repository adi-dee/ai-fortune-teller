import React, { useState } from 'react';

const FortuneType = ({ setFortuneType }) => {
  const [selectedType, setSelectedType] = useState(null);
  const handleSelection = (type) => {
    setSelectedType(type);
    setFortuneType(type);
  };
  
  return (
    <div>
      <h2>Select a Fortune Type</h2>
      <button onClick={() => handleSelection('love')}>Love</button>
      <button onClick={() => handleSelection('career')}>Career</button>
      <button onClick={() => handleSelection('wealth')}>Wealth</button>
      <button onClick={() => handleSelection('health')}>Health</button>
    </div>
  );
};

export default FortuneType;