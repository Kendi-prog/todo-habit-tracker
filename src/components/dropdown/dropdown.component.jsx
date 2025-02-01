import React, { useState } from "react";

import 'font-awesome/css/font-awesome.min.css';

const Dropdown = ({ label, options, selected, setSelected }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        setSelected(option);
        setIsOpen(false);
    }
    return (
        <div>
            <div onClick={toggleDropdown} style={{ cursor: 'pointer', border: '1 px solid #ccc', padding: '8px'}}>
                {label} : {selected}
                <span style={{ marginLeft: '10px' }} className="fa fa-chevron-down"></span>
            </div>
            {isOpen && (
                <ul>
                    {options.map((option, index) => {
                        return (
                            <li key={index} onClick={() => handleOptionClick(option)}>
                                {option}
                            </li>
                        )
                    })}
                </ul>
                )}
        </div>
    );
}

export default Dropdown;