import React, { useState } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {


    const [open, setOpen] = useState(false);

    const renderedOptions = options
                                .filter((el) => el.value !== selected.value)
                                .map((option) => {
       return(
           <div 
            key={option.value} 
            className="item" 
            onClick={() => onSelectedChange(option)}>
               {option.label}
           </div>
       ); 
    });

    return (
        <div className="ui form">
            <div className="field">
                <label className="label">Select a color</label>
                <div 
                    className={`ui selection dropdown ${!open ? '' : 'visible active'}`}
                    onClick={() => setOpen(!open)}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${!open ? '' : 'visible transition'}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;