/*******************************************************************************
Write a function `myForEach` that accepts an array and a callback as arguments.
The function should call the callback on each element of the array, passing in the
element, index, and array itself. The function does not need to return any value.

Do not use the built in Array#forEach.

Examples:


*******************************************************************************/
// input array and callback 
// output? 
// steps
// 1. iterate through the array in the  myForEach function
// 2. set the ele to the [i] of array 
// 3. call the callback 
// 4. set the cb as a new variable

let myForEach = function (array, cb) {
    for (let i = 0; i < array.length; i++) {
        let ele = array[i];
        cb(ele, i, array)
    }

};

let func = function (ele, i, array) {
    //console.log(el + ' is at index ' + i);
}

myForEach(['a', 'b', 'c'], function (el, i) {
    console.log(el + ' is at index ' + i);
}); // prints
// a is at index 0
// b is at index 1
// c is at index 2

let test = [];
myForEach(['laika', 'belka'], function (el) {
    test.push(el.toUpperCase());
});
console.log(test); // ['LAIKA', 'BELKA']
/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = myForEach;
