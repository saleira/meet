import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CitySearch from "../components/CitySearch";
import { extractLocations, getEvents } from "../api";
import App from "../App";

describe('<CitySearch/> component', () => {
    let CitySearchComponent;
    let cityTextBox;
    let user;
    beforeEach(() => {
        CitySearchComponent = render(<CitySearch allLocations={[]} setCurrentCity={() => { }} />);
        cityTextBox = CitySearchComponent.queryByRole('textbox');
        user = userEvent.setup();
    });

    test('renders text input', () => {
        expect(cityTextBox).toBeInTheDocument();
        expect(cityTextBox).toHaveClass('city');
    });

    test('suggestions list is hidden by default', () => {
        const suggestionList = CitySearchComponent.queryByRole('list');
        expect(suggestionList).not.toBeInTheDocument();
    });

    test('renders a list of suggestions when a city texbox gains focus', async () => {
        await user.click(cityTextBox);
        const suggestionList = CitySearchComponent.queryByRole('list');
        expect(suggestionList).toBeInTheDocument();
        expect(suggestionList).toHaveClass('suggestions');
    });

    test('updates list of suggestions correctly when user types in city textbox', async () => {
        const user = userEvent.setup();
        const allEvents = await getEvents();
        const allLocations = extractLocations(allEvents);
        CitySearchComponent.rerender(<CitySearch allLocations={allLocations} />);


        // user types "Berlin" in city textbox
        const cityTextBox = CitySearchComponent.queryByRole('textbox');
        await user.type(cityTextBox, "Berlin");


        // filter allLocations to locations matching "Berlin"
        const suggestions = allLocations ? allLocations.filter((location) => {
            return location.toUpperCase().indexOf(cityTextBox.value.toUpperCase()) > -1;
        }) : [];


        // get all <li> elements inside the suggestion list
        const suggestionListItems = CitySearchComponent.queryAllByRole('listitem');
        expect(suggestionListItems).toHaveLength(suggestions.length + 1);
        for (let i = 0; i < suggestions.length; i += 1) {
            expect(suggestionListItems[i].textContent).toBe(suggestions[i]);
        }
    });

    test('renders the suggestion text in the textbox upon cliking on the suggestion', async () => {
        const allEvents = await getEvents();
        const allLocations = extractLocations(allEvents);
        CitySearchComponent.rerender(<CitySearch allLocations={allLocations} setCurrentCity={() => { }}/>);

        const cityTextBox = CitySearchComponent.queryByRole('textbox');
        await user.type(cityTextBox, "Berlin");

        const BerlinGermanySuggestion = CitySearchComponent.queryAllByRole('listitem')[0];
        await user.click(BerlinGermanySuggestion);
        expect(cityTextBox).toHaveValue(BerlinGermanySuggestion.textContent);
    });

    test('renders only "See all cities" when a non-existent city is typed', async () => {
        const allEvents = await getEvents();
        const allLocations = extractLocations(allEvents);
        CitySearchComponent.rerender(<CitySearch allLocations={allLocations} setCurrentCity={() => { }} />);

        const cityTextBox = CitySearchComponent.queryByRole('textbox');
        await user.type(cityTextBox, "Paris,");
        const suggestionItems = CitySearchComponent.queryAllByRole('listitem');

        expect(suggestionItems.length).toBe(1);
        expect(suggestionItems[0].textContent).toBe('See all cities');
    });
});

describe('<CitySearch/> integration', () => {
    test('renders suggestions list when the app is redered', async () => {
        const user = userEvent.setup();
        const AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;

        const CitySearchDOM = AppDOM.querySelector('#city-search');
        const cityTextBox = within(CitySearchDOM).queryByRole('textbox');
        await user.click(cityTextBox);

        const allEvents = await getEvents();
        const allLocations = extractLocations(allEvents);

        const suggestionListItems = within(CitySearchDOM).queryAllByRole('listitem');
        expect(suggestionListItems).toHaveLength(allLocations.length + 1);
    });
});