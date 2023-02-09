import React, { useState } from "react";

const Card =  ({ front, backText }) => {
    return (
    <div class="container"> 
        <div className="card">  

        <div className="card_front">
        <p className="">
            {front}
        </p>
        </div>

        <div className="card_back">
        <div className="card-text">
            <p>{backText}</p>
        </div>
        </div>    
    </div>
    </div>

    );
};

export default Card;
