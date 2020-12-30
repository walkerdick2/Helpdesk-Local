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
  - [ ] Ticket Entry
    - Rows
      - [ ] ID - Number
      - [ ] FNAME - Text
      - [ ] LNAME - Text
      - [ ] EMAIL - Text (No Validation)
      - [ ] PROBLEM CATEGORY - Lookup
      - [ ] PROBLEM TEXT - Text
      - [ ] URGENCY - Lookup
      - [ ] IMPACT- Lookup
      - [ ] SUBMISSIONDATE - Date/Time
