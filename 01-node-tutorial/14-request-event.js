const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer();
// instead of call back function like above, use on function
// emit request event
// subcribe to it / listen for it / respond to it
// this shows that event is building block of node
server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5000);
