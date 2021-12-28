/*******************************************************************************
Write a function `reject` that accepts an array and callback as arguments. The
function should call the callback for each element of the array, passing in the
element. The function should return a new array
containing elements of the original array that result in false when given to the
callback.

Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.

Examples:


*******************************************************************************/
//1. set an array and a callback as arguments
//2. set a new varibale as a new array
//3. create a for loop
//4. write a conditional that resolved in false when given the callback
//5. push the new array
//6. return the new array


let reject = function(arr,cb) {
    let arr1=[];
    for (let i=0; i<arr.length; i++){
        if (cb(arr[i]) === false){
            arr1.push(arr[i])
        }
    }
    return arr1;

};


let isEven = function(n) {
    return n % 2 === 0;
};
console.log(reject([7, 8, 5, 6, 12, 11], isEven)); // [ 7, 5, 11 ]

let hasA = function(s) {
    return s.toLowerCase().includes('a');
};
console.log(reject(['breadth', 'GRAPH', 'depth', 'height'], hasA)); // [ 'depth', 'height' ]



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = reject;
