// CommonJS, every file in Node is module (by default)
// CommonJS is a project with the goal to establish conventions on the module ecosystem for JavaScript outside of the web browser.
// The primary reason for its creation was a major lack of commonly accepted forms of JavaScript module units which could be reusable in environments different from that provided by conventional web browsers running JavaScript scripts.
// Node uses CommonJS library under the hood.

// Modules - Encapsulated Code (only share minimum)

const names = require("./04-names");
// or you can do this
const { john, peter } = require("./04-names");
const sayHi = require("./05-utils");
const data = require("./06-alternative-way-to-export");
// if there is a function that we invoked inside the module, that function will run even though we didn't assign this to a variable
// The function inside this module is not exported on its own.
// When node export the code in the module, it wraps the code in a function.
require("./07-mind-grenade");
sayHi("susan");
sayHi(names.john);
sayHi(names.peter);

// BUILT-IN MODULES
// os
// path
// fs
// http
