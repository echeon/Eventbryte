# Eventbryte

[Eventbryte Live](http://eventbryte.herokuapp.com/)

<<<<<<< HEAD

## Minimum Viable Product

Eventbryte is a full-stack web application inspired by [Eventbrite](http://www.eventbrite.com). It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Notes
- [ ] Notebooks for organizing notes
- [ ] Tags
- [ ] Rich Text Editing
- [ ] Infinite Scroll
- [ ] [Production README](../README.md)


## Design Docs
* [Wireframes](./wireframes)
* [React Components](./component-heirarchy.md)
* [Sample State](./sample-state.md)
* [Redux Architecture](./redux-structure.md)
* [DB Schema](./schema.md)
* [API Endpoints](./api-endpoints.md)


## Implementation Timeline
## Bonus Features (if time allows)








## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Notes Model, API, and components (2 days)

**Objective:** Notes can be created, read, edited and destroyed through
the API.

- [ ] `Note` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for notes (`NotesController`)
- [ ] JBuilder views for notes
- Note components and respective Redux loops
  - [ ] `NotesIndex`
  - [ ] `NoteIndexItem`
  - [ ] `NoteForm`
- [ ] Autosave notes feature
- [ ] Style notes components
- [ ] Seed notes

### Phase 3: Notebooks (2 day)

**Objective:** Notes belong to Notebooks that can be created, read, edited and destroyed through the API.

- [ ] `Notebook` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for notes (`NotebooksController`)
- [ ] JBuilder views for notebooks
- [ ] Adding notes requires a notebook
- [ ] Moving notes between notebooks
- [ ] Viewing notes by notebook
- [ ] Style notebook components
- [ ] Seed notebooks

### Phase 4: Tags (1 days)

**Objective:** Notes can be tagged with multiple tags, and tags are searchable.

- [ ] `Tag` model and `Taggings` join table
- [ ] Fetching tags for notes
- [ ] Adding tags to notes
- [ ] Searching notes by tag
- [ ] Style search & tag components
- [ ] Seed tags with seed data

### Phase 5: Allow Complex Styling in Notes (1 days, W2 Th 6pm)

**objective:** Allow rich text editing of notes.

- [ ] Integrate `react-quill` (based on Quill.js).
- [ ] Rails helpers to sanitize HTML before rendering.
- [ ] Style Quill components.
- [ ] Add Quill styling to seeded notes

### Phase 6: - Pagination / infinite scroll for Notes Index (1 day, W2 F 6pm)

**objective:** Add infinite scroll to Notes Index

- [ ] Paginate Notes Index API to send 20 results at a time
- [ ] Append next set of results when user scrolls and is near bottom
- [ ] Style scroll components and transitions
- [ ] Ensure seed data demonstrates infinite scroll

### Bonus Features (TBD)
- [ ] Search notes by content
- [ ] Set reminders on notes
- [ ] Changelogs for Notes
- [ ] Multiple sessions
=======
Eventbryte is a full-stack web application inspired by [Eventbrite](http://www.eventbrite.com). It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.
>>>>>>> 07da59d8c8df3d4a4f38e7753e5a953a53f00069
