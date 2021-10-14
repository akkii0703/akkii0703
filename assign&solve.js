function runProgram(input) {
  // Write code here
  //convert string to array (use split)
    input=input.split(" ").map(Number);
    var [one,two,three,four,five,six]=input;
    infinityStones(one,two,three,four,five,six)
}
function infinityStones(one,two,three,four,five,six){
    var res=2*(two+five+six)+3*(four+three)+one;
    console.log(res);
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
