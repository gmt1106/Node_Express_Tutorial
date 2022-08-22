// Event Loop in node
// The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.
// Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background.
// When one of these operations completes, the kernel tells Node.js so that the appropriate callback may be added to the poll queue to eventually be executed.

// Events are core building block of node
// Most web app is event driven

// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// on and emit methods
// pass the name of the event to on function and pass the matching name to emit function
// keep track of the order
// additional arguments
// built-in modules utilize it

// listening for event
customEmitter.on("response", (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`);
});

customEmitter.on("response", () => {
  console.log("some other logic here");
});

// sending a request
customEmitter.emit("response", "john", 34);
