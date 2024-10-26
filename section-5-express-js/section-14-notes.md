# Section 14: Session & Cookies

## What's a Cookie?
- Great for storing data on the client (browser).
- Do NOT store sensitive data here! It can be viewed + manipulated.
- Cookies can be configurated to expire when the browser is closed (=> "Session Cookie") or when a certain age/expiry data is reached ("Permanent Cookie")
- Works well together with Sessions

## What's a Session?
- Stored on the server, NOT on the client.
- Great for storing sensitive data that should survive across requests.
- You can store ANYTHING in sessions.
- Often used for storing user data/authentication status.
- Identified cookie (don't mistake this with the term "Session Cookie").
You can use different storage for saving your sessuin on the server.

npm install --save express-session

## Using MongoDB to Store Session
npm install --save connect-mongodb-session

## Useful resource:

More on Sessions: https://www.quora.com/What-is-a-session-in-a-Web-Application

More on Cookies: https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies

Express-session Official Docs: https://github.com/expressjs/session