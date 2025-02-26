Feature: Specify Number of Events
    Scenario: When user hasn't specified a number, 32 is the default number
        Given the user opened the app
        When the list of events are rendered
        Then the user should see 32 events by default
    Scenario: User can change the number of events they want to see
        Given the user opened the app
        When the user specifies the number of events they want to see
        Then the user should see the specified number of events