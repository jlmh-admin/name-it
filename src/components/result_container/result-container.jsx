import React from 'react';
import NameCard from "./name-card"

import "./result-container.css";


const ResultContainer = ({ suggestedNames }) => {
    const suggestedNamesJsx = suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />;
    });
    return (
        <div className="result-container">
            {suggestedNamesJsx}
        </div>
    );
}

export default ResultContainer;

