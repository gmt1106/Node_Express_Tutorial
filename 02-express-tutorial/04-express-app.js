const express = require("express");
// path module that we covered in node tutorial
const path = require("path");

const app = express();

// setup static and middleware
// static means it is a file that server don't need to change it
// instead of http example where we need to create a path for every static resource,
// simply put them in a folder and pass the folder to express.static
app.use(express.static("./navbar-app"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000....");
});
