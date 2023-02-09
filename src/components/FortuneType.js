import React, { useState } from 'react';
import Card from './Card';

const FortuneType = ({ setFortuneType }) => {
  const [selectedType, setSelectedType] = useState(null);
  const handleSelection = (type) => {
    setSelectedType(type);
    setFortuneType(type);
  };
  
  return (
    <div className='cards'>
      <h2>Select a Fortune Topic</h2>
      <span onClick={() => handleSelection('love')}>
        <Card front={""} backText={"Love"}/>
      </span>
      <span onClick={() => handleSelection('career')}>
        <Card front={""} backText={"Career"}/>
      </span>
      <span onClick={() => handleSelection('wealth')}>
       <Card front={""} backText={"Wealth"}/>
      </span>
      <span onClick={() => handleSelection('health')}>
        <Card front={""} backText={"Health"}/>
      </span>
    </div>
  );
};

export default FortuneType;