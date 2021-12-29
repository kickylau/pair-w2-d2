/*******************************************************************************
Write a function `count` that accepts an array and a callback as arguments. The
function should return the number of elements of the array that return true when
passed to the callback.

Examples:


*******************************************************************************/
//1. put in an array and a callback as arguments of function count
//2. set a variable with an empty array
//3. create a for loop
//4. make a if statement that checks if elements in callback are true
//5. if its true push array[i] into new array
//6. return the length of new array


let count = function(array,cb) {
    let newArr = [];
    for (let i=0; i<array.length; i++){
        if (cb(array[i]) === true){
            newArr.push(array[i])
        }
    }
    return newArr.length;

};


let result1 = count([18, 5, 32, 7, 100], function (n) {
    return n % 2 === 0;
});
console.log(result1); // 3

let result2 = count([17, 5, 31, 7, 100], function (n) {
    return n % 2 === 0;
});
console.log(result2); // 1

let result3 = count(['follow', 'the', 'yellow', 'brick', 'road'], function (str) {
    return str.includes('o');
});
console.log(result3); // 3

let result4 = count(['follow', 'the', 'yellow', 'brick', 'road'], function (str) {
    return str.includes('x');
});
console.log(result4); // 0




/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = count;
