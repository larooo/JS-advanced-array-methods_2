// Q1.forEach - log
// Write a function that uses the[`forEach`](http://www.w3schools.com/jsref/jsref_forEach.asp) array method to log out every member of an array to the console. The function should only take in one argument, the array. The function should NOT use a traditional `for` loop.

const foreachFunc = arr =>
  arr.forEach(x => {
    console.log(x);
  });
foreachFunc([3, 4, 5]);

// Q2.simple - filter
// Write a function called `greaterThan10` that uses the[`filter`](http://www.w3schools.com/jsref/jsref_filter.asp) to filter an array and only return numbers that are greater than 10. The function should take in an array of numbers as an argument.
//     Examples:
//     ```js
// greaterThan10([1,2,3,11,12,13]); //returns [11,12,13]
// greaterThan10([11,2,3,1,22,4,33]); //returns [11,22,33]

const greaterThan10 = arr => arr.filter(x => x > 10);
console.log(greaterThan10([1, 2, 3, 11, 12, 13]));

// Q3.simple - filter - 2
// Write a function called `filterEvens` that uses the[`filter`](http://www.w3schools.com/jsref/jsref_filter.asp) method to filter an array and only return the even numbers. The function should take in an array of numbers as an argument, and should not use a loop.
//     Examples:
//     ```js
// filterEvens([1,2,3,11,12,13]); //returns [2,12]
// filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]

const filterEvens = arr => arr.filter(x => x % 2 === 0);
console.log(filterEvens([1, 2, 3, 11, 12, 13]));

// Q4.forEach - sum
// Write a function called `forEachSum` that takes in an array of numbers as an argument and returns a sum of the array.The function should use the[`forEach`](http://www.w3schools.com/jsref/jsref_forEach.asp) array method and should NOT use  `for` loop or `while` loop.
const forEachSum = arr => {
  let y = 0;
  arr.forEach(x => (y += x));
  return y;
};
console.log(forEachSum([1, 2, 10]));

// Q5.implement - forEach
// Write a function called `forEach` that takes in two arguments: an array and a function.`forEach` should apply the passed in function to every member of the array.It should not return anything.

function mal2(num) {
  console.log(num * 2);
}
const forEach = (arr, mal2) => {
  arr.forEach(mal2);
};

forEach([1, 2, 3], mal2);

// Q6.map - triple - array
// Write a function that uses the[`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) array method to triple every member of an array. The function should only take in one argument, the array. The function should NOT use a loop.

const mapTripleArr = arr => arr.map(x => x * 3);
console.log(mapTripleArr([1, 2, 3]));

// Q7.map - strings - to - nums
// Write a function called `stringsToNums ` that takes an array of strings, converts them to numbers, and returns a new array containing those numbers.Use the`map` array method, do not use any traditional loops.
//     Examples:
// ```js
// stringToNums(["4", "3", "9"]); //returns [4,3,9]
// stringToNums(["1", "22", "7"]); //returns [1,22,7]

const stringsToNums = arr => arr.map(x => parseInt(x)); // Number() method converts a string to a number.
console.log(stringsToNums(["4", "3", "9"]));

// Q8.first - letter - uppercase - map
// Write a function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.However, do not use a`for` loop, `while` loop, or`forEach`
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

// const firstLetterUpperCase = str => {
//   let arrSplit = str.split(" ");
//   return (arrSplitFirst = arrSplit
//     .map(x => x[0].toUpperCase().concat()) // + x.slice(1)) // .concat(x[1], x[x.length - 1])
//     .join(" "));
// };

// console.log(firstLetterUpperCase("the quick brown fox"));

// Q9.implement - map
// Write a function called `map` that takes in two arguments: an array and a function.`map` should apply the passed in function to every memeber of the array, and return a new array with the results.
//     Example:
// ```javascript
// map(arr, double); // returns [ 2, 4, 6, 8, 10 ]
// let arr = [1, 2, 3, 4, 5];
// function double(num) {
//   return num * 2;
// }

let arr = [1, 2, 3, 4, 5];
function double(num) {
  return num * 2;
}
const map = (x, func) => x.map(x => func(x));
console.log(map(arr, double));

// Q10.reduce - sum
// Write a function called `sum` that uses the[`reduce`](http://www.w3schools.com/jsref/jsref_reduce.asp) to sum up an array of numbers. Do NOT use a typical loop; just use the `reduce` method.
//     Examples:
//     ```js
// sum([1,2,3,4,5]); //returns 15
// sum([6,7,7]); //returns 20

const sum = arr => arr.reduce((sum, x) => sum + x);
console.log(sum([1, 2, 3, 4, 5]));

// Q11.reduce - min
// Write a function called `reduceMin` that uses the[`reduce`](http://www.w3schools.com/jsref/jsref_reduce.asp) to return the minimum number in an array of numbers. Do NOT use a typical loop; just use the `reduce` method.
//     Examples:
//     ```js
// reduceMin([2, 3, 4, 5, 1]); //returns 1
// reduceMin([6, 7, 7, 4]); //returns 4
// reduceMin([10, 0, 100, 1, -100, 20, 33]); //returns -100

const reduceMin = arrNum => arrNum.reduce((acc, x) => (acc < x ? acc : x));
const reduceMin1 = arrNum => arrNum.reduce((acc, val) => Math.min(acc, val));

console.log(reduceMin1([10, 0, 100, 1, -100, 20, 33]));

console.log(reduceMin([6, 7, 7, 4, 2]));

let arr1 = [6, 7, 7, 4, 2];
console.log(Math.min(...arr1));
