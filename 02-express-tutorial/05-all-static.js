const express = require("express");
const path = require("path");

const app = express();

// setup static and middleware
app.use(express.static("./navbar-app"));

// since index.html is also static file, we can put this into the static file folder, navbar-app
// so there are 2 comman ways to send static files like index.html
// 1. adding to static assets
// 2. SSR
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000....");
});

// Two use cases of express.js
// 1. API - setting up a http interface to interact our data
//    - data is sent by json
//    - use res.json() method
// 2. SSR
//    - set up template and send entire html, javascript and css files
//    - use res.render() method
