//for Single no input
function runProgram(input) {
  // Write code here
   input=+input
  masaiOddorEven(input)
}
function masaiOddorEven(num){
    if(num%2===0)
    console.log("even");
    else 
    console.log("odd");
}
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
