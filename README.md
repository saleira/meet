# Feature Scenarios

## Feature 1: Filter Events By City

- Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
- Scenario 2: User should see a list of suggestions when they search for a city.
- Scenario 3: User can select a city from the suggested list.

### As a Role Scenarios

- **Scenario 1**:  
  *As a user,*  
  *I should see upcoming events from all cities when I haven’t searched for a city,*  
  *So that I can explore all available events.*

- **Scenario 2**:  
  *As a user,*  
  *I should see a list of suggestions when I search for a city,*  
  *So that I can quickly find relevant results.*

- **Scenario 3**:  
  *As a user,*  
  *I should be able to select a city from the suggested list,*  
  *So that I can filter events specific to that city.*

### Given-When-Then Scenarios

- **Scenario 1**:  
  **Given** the user has not searched for a city,  
  **When** the user views the events list,  
  **Then** the app should display upcoming events from all cities.

- **Scenario 2**:  
  **Given** the user is typing in the city search bar,  
  **When** the user enters a query,  
  **Then** the app should display a list of city suggestions.

- **Scenario 3**:  
  **Given** the user has received a list of city suggestions,  
  **When** the user selects a city from the list,  
  **Then** the app should filter and display events specific to the selected city.

---

## Feature 2: Show/Hide Event Details

- Scenario 1: An event element is collapsed by default.
- Scenario 2: User can expand an event to see details.
- Scenario 3: User can collapse an event to hide details.

### As a Role Scenarios

- **Scenario 1**:  
  *As a user,*  
  *I should be able to see events collapsed by default,*  
  *So that the interface remains clean and uncluttered.*

- **Scenario 2**:  
  *As a user,*  
  *I should be able to expand an event to see its details,*  
  *So that I can learn more about the event.*

- **Scenario 3**:  
  *As a user,*  
  *I should be able to collapse an event to hide its details,*  
  *So that I can focus on other events or reduce visual clutter.*

### Given-When-Then Scenarios

- **Scenario 1**:  
  **Given** an event element is on the page, and the user has just loaded the app,  
  **When** the page loads,  
  **Then** the event element should be collapsed by default.

- **Scenario 2**:  
  **Given** an event element is collapsed,  
  **When** the user clicks on the event element,  
  **Then** the event should expand to display its details.

- **Scenario 3**:  
  **Given** an event element is expanded,  
  **When** the user clicks on the event element again,  
  **Then** the event should collapse to hide its details.

---

## Feature 3: Specify Number of Events

- Scenario 1: When user hasn’t specified a number, 32 events are shown by default.
- Scenario 2: User can change the number of events displayed.

### As a Role Scenarios

- **Scenario 1**:  
  *As a user,*  
  *I should see 32 events displayed by default when I haven’t specified a number,*  
  *So that I have a reasonable starting point for exploring events.*

- **Scenario 2**:  
  *As a user,*  
  *I should be able to change the number of events displayed,*  
  *So that I can customize the view to suit my preferences.*

### Given-When-Then Scenarios

- **Scenario 1**:  
  **Given** the user has not specified a number of events,  
  **When** the user views the events list,  
  **Then** the app should display 32 events by default.

- **Scenario 2**:  
  **Given** the user is viewing the events list,  
  **When** the user specifies a number of events to display,  
  **Then** the app should update the list to show the specified number of events.

---

## Feature 4: Use the App When Offline

- Scenario 1: Show cached data when there’s no internet connection.
- Scenario 2: Show error when user changes search settings (city, number of events).

### As a Role Scenarios

- **Scenario 1**:  
  *As a user,*  
  *I should be able to see cached event data when there’s no internet connection,*  
  *So that I can still access previously loaded information.*

- **Scenario 2**:  
  *As a user,*  
  *I should see an error message if I change search settings while offline,*  
  *So that I understand why the app cannot load new data.*

### Given-When-Then Scenarios

- **Scenario 1**:  
  **Given** the user has previously loaded events while online,  
  **When** the user opens the app while offline,  
  **Then** the app should display the cached event data.

- **Scenario 2**:  
  **Given** the user is offline and viewing cached event data,  
  **When** the user changes search settings (such as city or number of events),  
  **Then** the app should display an error message explaining that new data cannot be loaded.

---

## Feature 5: Add an App Shortcut to the Home Screen

- Scenario 1: User can install the meet app as a shortcut on their device home screen.

### As a Role Scenarios

- **Scenario 1**:  
  *As a user,*  
  *I should be able to install the meet app as a shortcut on my device home screen,*  
  *So that I can quickly access the app.*

### Given-When-Then Scenarios

- **Scenario 1**:  
  **Given** the user is accessing the app on a supported device,  
  **When** the user chooses to install the app,  
  **Then** the app should be added as a shortcut on the device’s home screen.

---

## Feature 6: Display Charts Visualizing Event Details

- Scenario 1: Show a chart with the number of upcoming events in each city.

### As a Role Scenarios

- **Scenario 1**:  
  *As a user,*  
  *I should see a chart with the number of upcoming events in each city,*  
  *So that I can easily compare event availability across locations.*

### Given-When-Then Scenarios

- **Scenario 1**:  
  **Given** there are multiple events across different cities,  
  **When** the user views the charts section,  
  **Then** the app should display a chart showing the number of upcoming events in each city.
