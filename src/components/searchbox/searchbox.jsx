import React from 'react';
import "./searchbox.css"


let SearchBox = ({ onInputChange }) => {


    return (
        <div className="search-container">
            <input placeholder='Type Keywords' className='search-input'
                onChange={(event) => onInputChange(event.target.value)} />
        </div>
    );
}
export default SearchBox;