import React from "react";
import { render } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";
import userEvent from "@testing-library/user-event";

describe("<NumberOfEvents/> component", () => {
    let numberOfEventsComponent;
    let input;
    beforeEach(() => {
        numberOfEventsComponent = render(<NumberOfEvents />);
        input = numberOfEventsComponent.getByRole("textbox");
    });

    test("checks if component contains a textbox", () => {
        expect(input).toBeInTheDocument();
    });

    test('renders input with default value of 32', () => {
        expect(input.value).toBe('32');
    });

    test('updates the input value when the user types', async () => {
        const user = userEvent.setup();
        // Simulate user typing: backspace twice and then typing "10"
        await user.type(input, '{backspace}{backspace}10');
        expect(input).toHaveValue('10');
    });
});