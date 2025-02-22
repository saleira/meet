/* eslint-disable react/prop-types */
const NumberOfEvents = ({currentNOE, setCurrentNOE}) => {


    const handleInputChanged = (event) => {
        const value = event.target.value;
        setCurrentNOE(Number(value));
    };
    return (
        <div id="number-of-events">
            <label htmlFor="noe-input">Number of events: </label>
            <input type="text" id="noe-input" className="noe-input" value={currentNOE} onChange={handleInputChanged}/>
        </div>
    );
};

export default NumberOfEvents;