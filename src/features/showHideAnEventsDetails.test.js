import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        let AppComponent;
        given('the user opened the app', () => {
            AppComponent = render(<App />);
        });

        when('the list of events are rendered', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });

        then('the event element should be collapsed by default', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventDetails = AppDOM.querySelector('.event-description');
            expect(EventDetails).not.toBeInTheDocument();
        });
    });

    test('User can expand an event to see details.', ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;
        let EventListDOM;
        let btnDetails;
        let EventListItems;
        given('an event element is collapsed,', async  () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
            EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBeGreaterThan(0);
            });

            btnDetails = EventListDOM.querySelector('.details-btn');            
            expect(btnDetails).toBeInTheDocument();
        });

        when('the user clicks on the event element,', async() => {
            const user = userEvent.setup();
            await user.click(btnDetails);
        });

        then('the event should expand to display its details.', async () => {
            const EventDetails = AppDOM.querySelector('#event-description');
            expect(EventDetails).toBeInTheDocument();
        });
    });

    test('User can collapse an event to hide details.', ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;
        let EventListDOM;
        let btnDetails;
        let EventListItems;
        given('an event element is expanded,', async () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
            EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                EventListItems = within(EventListDOM).queryAllByRole('listitem');
            });
            btnDetails = EventListDOM.querySelector('.details-btn');
            const user = userEvent.setup();
            await user.click(btnDetails);
            const EventDetails = AppDOM.querySelector('#event-description');
            expect(EventDetails).toBeInTheDocument();

        });

        when('the user clicks on the event element again,', async () => {
            const user = userEvent.setup();
            await user.click(btnDetails);
        });

        then('the event should collapse to hide its details.', () => {
            const EventDetails = AppDOM.querySelector('#event-description');
            expect(EventDetails).not.toBeInTheDocument();
        });
    });
});