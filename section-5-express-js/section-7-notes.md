# Section 7 : The MPC (Model View Controller)

## What's MVC

Separation of concerns

### Models
- Represent your data in your code
- Work with your data (e.g. save, fetch, ...)
- Doesn't matter if you manage data in emory, files, databases,
- Containes data-related logic

### Views
- What the users sees
- Decoupled from yout application code
- Shouldn't contain too much logic

### Controllers ( <-- Routes )
- Connect Models and Views
- Contain the "in-between" logic
- Should only make sure that two can communicate (in both directions)

## Useful resources:

More on MVC: https://developer.mozilla.org/en-US/docs/Glossary/MVC