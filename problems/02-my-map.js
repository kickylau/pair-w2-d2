/*******************************************************************************
Write a function `myMap` that accepts an array and a callback as arguments.
The function return an array of new elements obtained by calling the callback on
each element of the array, passing in the element.

Do not use the built in Array#map

// Examples


*******************************************************************************/


//1. put array and a callback into arguments
//2. set a variable for a newarray
//3. create a for loop
//4. create a new variable for the array index
//5.


let myMap = function(array,cb) {
    let arr = [];
    for (let i=0; i<array.length; i++){
        let ele = array[i];
        arr.push(cb(ele));
    }


    return arr;

};

let func = function(ele,i,array){
    return ele;
}


let result1 = myMap([100, 25, 81, 64], Math.sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]

let result2 = myMap(['run', 'Forrest'], function (el) {
    return el.toUpperCase() + '!';
});
console.log(result2);   // [ 'RUN!', 'FORREST!' ]


/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = myMap;
