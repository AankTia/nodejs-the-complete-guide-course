# Section 5 (Express.js)

## What is Express.js?
### Alternatives to Express.js
Vanilla Node.js
Adonis.js
Kos
Sails.js
...

## Install Express.js
npm install --save express

## Middleware

## Parser Incoming request
npm install --save body-parser

## Express Router
## Adding 404 Page
## Filtering Path
## Creating HTML Page
## Returning 404 Page
## Helper Function for Navigation
A Hint!
In the next lecture, we'll write this code:

module.exports = path.dirname(process.mainModule.filename);
(I explain why we write this code in the next lecture when we write it!)

The important thing is that you might get a deprecation warning for that code - in that case, you can simply switch to this code:

module.exports = path.dirname(require.main.filename);
Quite straightforward :

## Styling Pages
## Serving File Staticaly

## Summary
### What is Express.js?
- Express.js is Node.js framework - a package that adds a bunh of utility function and tools and a clear set of rules on how the aap should be build (middleware!)
- It's highly extensible and other packages can be pugged into it (middleware!)

### Midleware, next() and res()
- Express.js relies heavily on middleware functions - you can easily add them by calling use()
- Middleware functions handle a request and should call next() to forward the request to the next function in line or send a response.

### Routing
- You can filter requests by path and method.
- If you filter by method, paths are matched exactly, otherqise, the first segment of a URL is matched.
- You can use the express.Router to split you routes across files elegantly

### Serve File
- You're not limted serving dummy text as a response.
- You can sendFile()s to your users - e.g. HTML files.
If a request is directly made for a file (e.g. a .css file is requested), you can enable static serving for such files via express.static()


## Useful resources:

Express.js Official Docs: https://expressjs.com/en/starter/installing.html