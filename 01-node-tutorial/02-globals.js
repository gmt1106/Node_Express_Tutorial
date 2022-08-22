// GLOBAL VARIABLE

// NO WINDOW !!!!  - node does not have window object because it is not a browser

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed
//              This is useful because env change when app is running in local or deloyed in production

console.log(__dirname);
setInterval(() => {
  console.log("hello world");
}, 1000);
