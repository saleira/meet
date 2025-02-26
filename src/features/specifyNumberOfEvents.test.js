import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import { render, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
    test('When user hasn\'t specified a number, 32 is the default number', ({ given, when, then }) => {
        let AppComponent
        given('the user opened the app', () => {
            AppComponent = render(<App />);
        });

        let EventListDOM;
        when('the list of events are rendered', () => {
            const AppDOM = AppComponent.container.firstChild;
            EventListDOM = AppDOM.querySelector('#event-list');
        });

        then(/^the user should see 32 events by default$/, () => {
            waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });
    });


    test('User can change the number of events they want to see', ({ given, when, then }) => {
        let AppComponent;
        given('the user opened the app', () => {
            AppComponent = render(<App />);
        });

        let AppDOM;
        let EventListDOM;
        when('the user specifies the number of events they want to see', async() => {
            AppDOM = AppComponent.container.firstChild;
            EventListDOM = AppDOM.querySelector('#event-list');
            const input = AppDOM.querySelector("#noe-input");
            const user = userEvent.setup();
            await user.type(input, '{backspace}{backspace}10');
            expect(input).toHaveValue(10);
        });

        then('the user should see the specified number of events', () => {
            waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(10);
            });
        });
    });
});