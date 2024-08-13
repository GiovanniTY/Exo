/* Exercise 3: Sum of Numbers in an Array
Problem Description:
Write a function sumArray(arr) that takes an array of numbers and 
returns the sum of all the elements in the array. */

function sumArray(arr) {
    // implement the function here
    let result = 0;
    arr.forEach(element => {
        result += element;
    });
    return result;

}
  
let array1 = [1,2,3,4,5];
  console.log(sumArray(array1));

console.log(sumArray([1,2,3]));






  