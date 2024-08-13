/* Exercise 7: Sum of Two Numbers
Problem Description:
Write a function twoSum(arr, target) that takes an array of numbers and a target number. 
The function should return 
an array containing the indices of the two elements that sum up to the target. */
function twoSum(arr, target) {
    let numIndices = {};  // Oggetto per memorizzare i numeri e i loro indici
  
    for (let i = 0; i < arr.length; i++) {
      let complement = target - arr[i];  
  
      if (numIndices[complement] !== undefined) {
        return [numIndices[complement], i];  
      }
  
      numIndices[arr[i]] = i;
    }
  
    return [];  
  }
  

  const arr1 = [1, 2, 3, 4, 5];
  const target1 = 9;
  console.log(twoSum(arr1, target1));  
  