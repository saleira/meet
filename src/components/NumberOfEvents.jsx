import React, { useState } from "react";

const NumberOfEvents = () => {

    const [numberOfEvents, setNumberOfEvents] = useState(32);

    const handleInputChanged = (event) => {
        const value = event.target.value;
        setNumberOfEvents(value);
    };
    return (
        <div id="number-of-events">
            <label htmlFor="noe-input">Number of events: </label>
            <input type="text" id="noe-input" className="noe-input" value={numberOfEvents} onChange={handleInputChanged}/>
        </div>
    );
};

export default NumberOfEvents;