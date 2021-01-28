# Helpdesk Local #

 A locally coded helpdesk system

 TODO

- [ ] Setup Server
  - [X] Install Dependencies
    - [X] Install / Setup Linter
    - [X] Setup Express App
    - [X] Setup Not found and Error Middleware
- [X] Model DB
  - What kind of Data?
  - What kind of database?
  - See Below!
- [X] Setup Mongoose Model
- [X] Setup API
- [X] Post /tickets
  - Log ticket entries
- [X] GET /tickets
  - List ticket entries
- [X] DELETE /tickets
  - Delete Ticket
- [X] PATCH /tickets
  - Update Ticket
- [ ] Setup a Client
  - [ ] Create a UI for Support Agents
  - [ ] Create a UI for Ticket Submission
  - [ ] Create a UI for viewing Ticket Status
  - [ ] Create a UI to Update Tickets

---

## Database Layout ##

- Tables
  - [X] Ticket Entry
    - Rows
      - [X] ID - Number
      - [X] FNAME - Text
      - [X] LNAME - Text
      - [X] EMAIL - Text (No Validation)
      - [X] PROBLEM - Text
      - [X] URGENCY - Number 0 - 5
      - [X] CREATED AT - Date/Time
      - [X] UPDATED AT - Date/Time


Note: The software depends on the following software:
  - Node.js
    - If you clone this Github Repository you should have all of the packages.
    - You can install node.js here <https://nodejs.org/en/download/>
  - Mongo DB  
    - Mongo DB Compass LocalDatabase installed on the same machine.
    - You can download Mongo DB Compass Here <https://downloads.mongodb.com/compass/>