import React, { useEffect, useState, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {


    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        document.body.addEventListener('click', (event) => {
            if (ref.current && ref.current.contains(event.target)) {
                return;
            }

            setOpen(false);

        }, { capture: true });
    }, []);

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
        <div ref={ref} className="ui form">
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