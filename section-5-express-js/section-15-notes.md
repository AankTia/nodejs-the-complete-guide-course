# Section 15: Adding Authentication
## What is Authentication?
- Authentication means means that not every visitor of the page can view and interact with everything.
- Authentication has to happen on the server-side and builds up on sessions.
- You can protect routes by checking the (session-controlled) login status right before you access a controller action

## Security & UX
- Passwords should be stored in a hashed form
- CSRF attacks are a real issue and you should terefore include CSRF protection in ANY application you build!
- For a better user experienece, you can flash data/messages into the session which you then can diaplay in your views.

## How is Authentication Implemented?

### Encripting Password
npm install --save bcryptjs

### CSRF Attack
Cross-Site Request Forgery

npm install --save csurf

### csurf() Alternatives
Unfortunately, the csurf package, which is used in some sections of this course, is no longer maintained at this time. The development team recently deprecated this popular package, saying that it should no longer be used (https://github.com/expressjs/csurf#deprecated).

The purpose of the corresponding course lectures is to explain the general principle of CSRF attacks. You can still safely use the deprecated package for learning purposes, since attacks are only simulated locally in our code.

However, in practice you should now choose a different package (https://www.npmjs.com/search?q=express%20csrf). You may, for example, consider using this package (which has a different API than csurf()): https://www.npmjs.com/package/csrf-csrf.

Please understand that support in this course currently still focuses on the csurf API, as shown in the course videos and code snapshots.

And most importantly, the general principle explained in this course is package independent.

### Show messages
npm install --save connect-flash

## Useful resources:

Bcrypt Official Docs: https://github.com/dcodeIO/bcrypt.js

More on CSRF Attacks: https://www.acunetix.com/websitesecurity/csrf-attacks/