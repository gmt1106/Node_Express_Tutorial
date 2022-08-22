const http = require("http");

const server = http.createServer((req, res) => {
  // req = incoming request from browser
  // res = what we are sending back

  //   if (req.url === '/') {
  //     res.end('Welcome to our home page')
  //   }
  //   if (req.url === '/about') {
  //     res.end('Here is our short history')
  //   }
  //   res.end(`
  //   <h1>Oops!</h1>
  // <p>We can't seem to find the page you are looking for</p>
  // <a href="/">back home</a>
  //   `)
  // ###################################
  // ###################################
  //
  //  IF YOU GET ERRORS WHILE USING ABOVE SETUP,
  // SWITCH TO IF, ELSE IF, ELSE (BELOW)
  // WE COVER THE CAUSE, LATER IN EXPRESS TUTORIAL
  // check the end point that the user try to access using url property in req
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `);
  }
});

// port that our server will listening to
server.listen(5000);

// npm
// npm - global command, and it comes with node
// For local dependency (use it only in this particular project)
// npm install <PackageName>
// npm i <PackageName>
// For global dependency (use it in any project)
// npm install -g <PackageName>
// sudo npm install -g <PackageName>   // mac most likely to ask for sudo
// But now these days packages that are encuraged to be installed globally, are encuraged to be installed with npx
// npx - It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.

// package.json
// package.json - manifest file, store important info about project/package
// For creating this file
// manual approach (create package.json in the root, create properties, etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)
// Why package.json is so important?
// dependencies in package.json is important
// when you push the code to the github, packages in node_modules folder are not pushed together since it is too big.
// (add node_modules in the .gitignore file)
// when other developers pull the changes from github, they need to run npm install to install all the packages in dependencies in packages.json
// this way, we can share the packages we need to run this project without literally push and pull all the packages to github
// What is devDependencies
// packages that are only needed in development state not in production state ex) nodemon

// package-lock.json
// Why do we need this?
// save the specific version of each package because we want sepecific version for each package
