// streams
// used to read or write sequentially, when we have to handle and manipulate streaming data for example continous source or a big file
// let's say you are reading a big file, assigning the file data to a variable uses a lot of memory space.
// four different types of streams
// 1. writeable
// 2. readable
// 3. duplex - do both reading and writing
// 4. transform - data can be modified while reading or writing

const { createReadStream } = require("fs");

// default 64kb of data per read, change it by passing arguments
// last buffer - remainder
// highWaterMark - control size of each reading block
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream("./content/big.txt");

stream.on("data", (result) => {
  console.log(result);
});
stream.on("error", (err) => console.log(err));
