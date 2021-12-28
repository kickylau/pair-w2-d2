/*******************************************************************************
Write a function `multiMap` that accepts a value, a number n, and a callback.
The function should return the new value that results from running the original value
through the callback n times.

Examples:


*******************************************************************************/

// input a value, a number n, and a callback
// output the new value that results from running the original value
// through the callback n times.
// steps
// 1. put value,n,callback as arguments in the multiMap function
// 2. set new variable to newValue = value
// 3. iterate through n with for loop 
// 4. apply newVal into callback function
// 5. return newVal 

let multiMap = function(value,n,cb) {
  let newVal = value;
  for(let i = 1; i <= n; i++) {
    
    newVal = cb(newVal)
  }
  return newVal;
};


let result1 = multiMap(7, 2, function(n) {
  return n * 10;
});
console.log(result1); // 700

let result2 = multiMap(7, 3, function(n) {
    return n * 10;
});
console.log(result2); // 7000

let result3 = multiMap("hi", 5, function(s) {
  return s + "!";
});
console.log(result3); // hi!!!!!

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = multiMap;
