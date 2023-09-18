## Exercise 0.6 New Note in SPA Diagram

Sequence diagram depicting user creating a new note in single-page app version of notes app at https://studies.cs.helsinki.fi/exampleapp/spa


``` mermaid
sequenceDiagram
    participant browser
    participant server

    Note left of browser: User inputs data and submits the from
    Note right of browser: Event handler prevents default handling of form submit. The browser does not refresh.
    Note right of browser: Event handler creates new note, adds to and rerenders the note list and sends the user input to the server in JSON format
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note left of server: Server parses data
    server-->>browser: HTTP status 201 created {"message": "note created"}
    deactivate server

```
