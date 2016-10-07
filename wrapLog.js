// Create a function called wrapLog() that takes in a function (callback) and a string (name)
// and returns a function that does the same thing as callback but also logs the name,
// input parameters, and return value of the callback function:

var wrapLog = function (callback, name) {
  return function(){
    var arg1 = arguments[0];
    var arg2 = arguments[1];
    console.log(name + "(" + arg1 + "," + arg2 + ") => " + callback(arg1, arg2));
  };
};

var sum = function (a,b) { return a + b; }; //sum is the callback
var logSum = wrapLog(sum, "sum");

logSum(5,3); // sum(5,3) => 8
logSum(3,2); // sum(3,2) => 5


