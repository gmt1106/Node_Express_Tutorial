const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// If such a file doesn't exist node will create one, and if it does then node will overwrite the whole contents (by default)
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" } // append this to existing contents in the file
);
console.log("done with this task");
console.log("starting the next one");
