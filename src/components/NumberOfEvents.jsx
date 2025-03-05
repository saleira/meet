import { set } from "nprogress";
import { useState } from "react";
/* eslint-disable react/prop-types */
const NumberOfEvents = ({currentNOE, setCurrentNOE, setErrorAlert}) => {
    const [number, setNumber] = useState(currentNOE);

    const handleInputChanged = (event) => {
        const value = event.target.value;
        setNumber(value);
        

        let errorText;
        if (isNaN(value) || value <= 0) {
            errorText = "Please enter a valid number";
        } else {
            errorText = "";
            setCurrentNOE(Number(value));
        } 
        setErrorAlert(errorText);

    };
    return (
        <div id="number-of-events">
            <label htmlFor="noe-input">Number of events: </label>
            <input type="number" id="noe-input" className="noe-input" value={number} onChange={handleInputChanged}/>
        </div>
    );
};

export default NumberOfEvents;