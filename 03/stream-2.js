const fs = require("fs");

const readStream = fs.createReadStream("./example.txt", "utf-8");
const writeStream = fs.createWriteStream("./writeMe.txt");

readStream.on("data", (chunk) => {
    console.log("new chunk received :");
    writeStream.write(chunk);
})

