import React, { useState } from "react";

const ResultCard =  ({  backText }) => {
    return (
        <div  className="result-container">
        <div className="result-card">  
        <div className="result-card_back">
        <div className="result-card-text">
            {backText}
        </div>
        </div>    
    </div>
    </div>

    );
};

export default ResultCard;
