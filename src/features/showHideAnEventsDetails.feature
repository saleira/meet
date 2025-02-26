Feature: Show/Hide Event Details
    Scenario: An event element is collapsed by default.
        Given the user opened the app
        When the list of events are rendered
        Then the event element should be collapsed by default
    Scenario: User can expand an event to see details.
        Given an event element is collapsed,
        When the user clicks on the event element,
        Then the event should expand to display its details.
    Scenario: User can collapse an event to hide details.
        Given an event element is expanded,
        When the user clicks on the event element again,
        Then the event should collapse to hide its details.