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
- [ ] Setup Mongoose Model
- [ ] Setup API
- [ ] Post /tickets
  - Log ticket entries
- [ ] GET /tickets
  - List ticket entries
- [ ] Setup a Client
  - [ ] Create a UI for Support Agents
  - [ ] Create a UI for Ticket Submission

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
      - [X]CREATED AT - Date/Time
      - [X] UPDATED AT - Date/Time
