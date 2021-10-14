function runProgram(input) {
  // Write code here
  input=input.split("\n");
  //(/n) means new line
  var N=+input[0];
  var arr=input[1].split(" ").map(Number); 
  evenArr(N,arr)
}
function evenArr(N,arr){
    for(var i=0;i<arr.length;i++)
    if(arr[i]%2===0)
    console.log(arr[i])
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
