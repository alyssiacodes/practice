//first helloworld javascript program

function processData(input) {
    var first_string = "Hello World!"; 
    console.log(first_string);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
