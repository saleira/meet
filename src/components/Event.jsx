/* eslint-disable react/prop-types */
import { useState } from "react";

const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <li className="event">
            <h2>{event.summary}</h2>
            <p>{event.location}</p>
            <p>{new Date(event.start.dateTime).toUTCString()}</p>
            <div className="event-details" id="event-details" data-testid="event-details">
                <h2>About event:</h2>
                <button className="details-btn" onClick={() => {
                    showDetails ? setShowDetails(false) : setShowDetails(true);
                }}>{showDetails ? "hide details" : "show details"}</button>
                {showDetails && 
                <p id="event-description" data-testid="event-description">{event.description}</p>}
            </div>
        </li>
    );
};
export default Event;
