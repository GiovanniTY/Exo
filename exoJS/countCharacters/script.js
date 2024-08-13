/* Exercise 5: Count Character Occurrences
Problem Description:
Write a function countCharacters(str) 
that takes a string and returns an object with the count 
of occurrences of each character in the string. */

function countCharacters(str) {
    // implement the function here
   let str1 = str.split('');
   let count = {};
  
   for (let char of str) {
    count[char] = (count[char] || 0) + 1;
   }
   return count; 
  }

  console.log(countCharacters("abbcccddd"));
  