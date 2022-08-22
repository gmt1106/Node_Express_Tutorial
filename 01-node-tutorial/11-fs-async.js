// 3. Using async functions with promise
const { readFile, writeFile } = require("fs").promises;
// node module
const util = require("util");

// console.log('start')
// readFile('./content/first.txt', 'utf8', (err, result) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   const first = result
//   readFile('./content/second.txt', 'utf8', (err, result) => {
//     if (err) {
//       console.log(err)
//       return
//     }
//     const second = result
//     writeFile(
//       './content/result-async.txt',
//       `Here is the result : ${first}, ${second}`,
//       (err, result) => {
//         if (err) {
//           console.log(err)
//           return
//         }
//         console.log('done with this task')
//       }
//     )
//   })
// })
// console.log('starting next task')

// ########### solution without call back hell ###########

// 1. Using wrapping function that wrap asyncronous function in a promise
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

// how to run function that return promise
// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// 2. Using the promisetify function from util module
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const execute = async () => {
  try {
    // 1. Using wrapping function
    // const first = await getText("./content/first.txt");
    // const second = await getText("./content/second.txt");

    // 2. Using the promisetify function from util module
    // const first = await readFilePromise("./content/first.txt", "utf8");
    // const second = await readFilePromise("./content/second.txt", "utf8");
    // await writeFilePromise(
    //   "./content/result-async.txt",
    //   `Here is the result : ${first}, ${second}`
    // );

    // 3. Using async functions with promise
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`
    );
  } catch (err) {
    console.log(err);
  }
};

execute();
