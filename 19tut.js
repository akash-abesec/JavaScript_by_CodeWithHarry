// Blocking(Synchronous) => Line by line execution
// Non-blocking(Asynchronous) execution => line by line execution not guaranteed, call blocks will fire
let fs = require("fs");
let text = fs.readFile("dele.txt", "utf-8", (error, data)=>{
console.log(error, data);
});
console.log("This is a message");
