const path = require("path");

// Return my platform specific seperator  ex) /
console.log(path.sep);

// joins the sequence of path segments using the platform specific seperator
const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath);

// get the last portion of the filePath
const base = path.basename(filePath);
console.log(base); // test.txt

// return an absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
