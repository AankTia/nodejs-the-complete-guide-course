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
Quite straightforward :)