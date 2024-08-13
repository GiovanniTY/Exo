/* Exercise 4: Find the Missing Number
Problem Description:
Given an array of numbers from 1 to n, with one 
number missing, write a function findMissingNumber(arr, n) that returns the missing number.

 */

function findMissingNumber(n, arr) {
    // implement the function here
    let sum = 0;

    for (let i = 0; i < n - 1; i++) {
        sum+=arr[i];
    }
        const expectedSum = (n *(n + 1)) / 2;

        return expectedSum - sum;
    }


  const array1 = [1,2,3,5];
  const n = 5;
  console.log(findMissingNumber(n, array1));
  