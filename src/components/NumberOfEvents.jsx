import { useState } from "react";
/* eslint-disable react/prop-types */
const NumberOfEvents = ({currentNOE, setCurrentNOE}) => {
    const [number, setNumber] = useState(currentNOE);

    const handleInputChanged = (event) => {
        const value = Number(event.target.value);
        setNumber(value);
        setCurrentNOE(value);
    };
    return (
        <div id="number-of-events">
            <label htmlFor="noe-input">Number of events: </label>
            <input type="text" id="noe-input" className="noe-input" value={number} onChange={handleInputChanged} data-testid="numberOfEventsInput"/>
        </div>
    );
};

export default NumberOfEvents;