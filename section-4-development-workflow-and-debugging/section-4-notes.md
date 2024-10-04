# Section 4

## Understanding NPM Script

## Installing 3rd Party Packages
Use: npm install PACKAGE_NAME

Installs & Managed via npm:
- express
- body-parser
- nodemoon
- etc..

### Global Features vs Core Modules vs Third-Party Modules
The last lectures contained important concepts about available Node.js features and how to unlock them.

You can basically differentiate between:

Global features: Keywords like const or function but also some global objects like process

Core Node.js Modules: Examples would be the file-system module ("fs"), the path module ("path") or the Http module ("http")

Third-party Modules: Installed via npm install - you can add any kind of feature to your app via this way

Global features are always available, you don't need to import them into the files where you want to use them.

Core Node.js Modules don't need to be installed (NO npm install is required) but you need to import them when you want to use features exposed by them.

Example:

const fs = require('fs');

You can now use the fs object exported by the "fs" module.

Third-party Modules need to be installed (via npm install in the project folder) AND imported.

Example (which you don't need to understand yet - we'll cover this later in the course):

// In terminal/ command prompt
npm install --save express-session
// In code file (e.g. app.js)
const sessions = require('express-session');

### Types of Errors
Syntax Errors
- Typo
- miss-type
- missing/extra character

Runtime Errors

Logical Errors

## Summary
### npm
- npm stands for "Node Package Manager" and it always you to manage your Node project and its dependencies.
- You can initialize a project with npm init
- npm scripts can be defined in the package.json to give you "shortcuts" to common tasks/commands

### 3rd Party Packages
- Node project typically don't just use core modules and custom code but also third-party packages.
- You can install them via npm.
- You can differentiate between production dependencies (--save), development dependencies (--save-dev) and global dependencies (-g)

### Type od Errors
- Syntax, runtime and logical errors can break your app.
- Syntax and runtime errors throe (helpful) error message (with line numbers!).
- Logical errors can be fixed with testing and the help of the debugger.

### Debuging
- Use VS Code Node debugger to step into your code and go through it step-by-setp.
- Analyze variable values at runtime.
- Look into (and manipulate) variables at runtime.
- Set breakpoints cleaverly (i.e. respect the async/event-driven nature)

## Useful resources
More on debugging Node.js: https://nodejs.org/en/docs/guides/debugging-getting-started/

Debugging Node in Visual Studio Code: https://code.visualstudio.com/docs/nodejs/nodejs-debugging