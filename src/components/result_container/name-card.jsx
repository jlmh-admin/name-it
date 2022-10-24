import React from 'react';

import "./name-card.css";

const findCheapUrl = "https://www.namecheap.com/domains/registration/results/?domain=";

const NameCard = ({ suggestedName }) => {

    return (
        <a href={`${findCheapUrl}${suggestedName}`} target="_blank" rel="noreferrer" className="card-name">
            <div className="result-name-card">
                <p className="result-name">{suggestedName}</p>
            </div>
        </a>
    );
}

export default NameCard;