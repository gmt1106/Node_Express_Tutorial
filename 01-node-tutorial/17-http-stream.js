var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    // data of very big size file is sent to the user directly
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)

    // divide the big data into blocks and send them
    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(res); // pipe() - pushring from the readStream to rightStream
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
