import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Event from "../components/Event";
import { getEvents } from "../api";

describe('<Event/> component', () => {
    let EventComponent;
    let allEvents;
    beforeEach(async () => {
        allEvents = await getEvents();
        EventComponent = render(<Event event={allEvents[0]} />);
    });
    
    test('rendes event title', () => {
        expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
    });

    test('renders event location', () => {
        expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
    });

    test('renders event time', () => {
        const expectedDate = new Date(allEvents[0].start.dateTime).toUTCString();
        expect(EventComponent.queryByText(expectedDate)).toBeInTheDocument();
    });

    test('renders "show details" button', () => {
        expect(EventComponent.getByText('show details')).toBeInTheDocument();
    });

    test('shows the details section when the user clicks on the "show details" button', async () => {
        const detailsButton = EventComponent.getByText('show details');
        const user = userEvent.setup();
        await user.click(detailsButton);
        expect(EventComponent.getByText('hide details')).toBeInTheDocument();
        expect(EventComponent.queryByText('show details')).not.toBeInTheDocument();
        expect(EventComponent.getByTestId('event-description')).toBeInTheDocument();
    });

    test('hides the details section when the user clicks on the "hide details" button', async () => {
        const user = userEvent.setup();
        const showdetailsButton = EventComponent.getByText('show details');
        expect(showdetailsButton).toBeInTheDocument();
        
        await user.click(showdetailsButton);
        expect(EventComponent.getByTestId('event-description')).toBeInTheDocument();

        await user.click(EventComponent.getByText('hide details'));
        expect(EventComponent.queryByTestId('event-description')).not.toBeInTheDocument();
        expect(showdetailsButton).toBeInTheDocument();
        expect(EventComponent.queryByText('hide details')).not.toBeInTheDocument();
    });
});