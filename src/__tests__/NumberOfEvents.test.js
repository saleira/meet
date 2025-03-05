import { render } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";
import userEvent from "@testing-library/user-event";

describe("<NumberOfEvents/> component", () => {
    let numberOfEventsComponent;
    let setCurrentNOE;
    beforeEach(() => {
        setCurrentNOE = jest.fn();
        numberOfEventsComponent = render(<NumberOfEvents currentNOE={32} setCurrentNOE={setCurrentNOE} setErrorAlert={() => {}}/>);
    });

    test("checks if component contains a spinbutton", () => {
        const input = numberOfEventsComponent.getByRole("spinbutton");
        expect(input).toBeInTheDocument();
    });

    test('renders input with default value of 32', () => {
        const input = numberOfEventsComponent.getByRole("spinbutton");
        expect(input.value).toBe('32');
    });

    test('updates the input value when the user types', async () => {
        const input = numberOfEventsComponent.getByRole("spinbutton");
        const user = userEvent.setup();
        await user.type(input, '{backspace}{backspace}10');
        expect(input).toHaveValue(10);
    });
});