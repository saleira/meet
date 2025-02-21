import { render, within } from '@testing-library/react';
import App from './../App';
import userEvent from '@testing-library/user-event';
import { getEvents } from './../api';

describe('<App /> component', () => {
    let AppDOM;
    beforeEach(() => {
        AppDOM = render(<App/>).container.firstChild;
    });
    
    test('reders list of events', () => {
        expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
    });

    test('render CitySearch', () => {
        const AppDOM = render(<App />).container.firstChild;
        expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
    });
});

describe('<App /> integration', () => {
    test('renders a list of events matching the city selected by the user', async () => {
        const user = userEvent.setup();
        const AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;

        const CitySearchDOM = AppDOM.querySelector('#city-search');
        const CitySearchInput = within(CitySearchDOM).queryByRole('textbox');

        await user.type(CitySearchInput, 'Berlin');
        const berlinSuggestionItem = within(CitySearchDOM).queryByText('Berlin, Germany');
        await user.click(berlinSuggestionItem);

        const EventListDOM = AppDOM.querySelector('#event-list');
        const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');
        const allEvents = await getEvents();
        const berlinEvents = allEvents.filter(event => event.location === 'Berlin, Germany');
        const expectedEventCount = Math.min(berlinEvents.length, 32);
        expect(allRenderedEventItems.length).toBe(expectedEventCount);

        allRenderedEventItems.forEach(event => {
            expect(event.textContent).toContain('Berlin, Germany');
        });
    });
});