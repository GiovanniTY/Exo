/* Exercise 2: Anagrams
Problem Description:
Write a function isAnagram(str1, str2) that takes two strings and returns true if they 
are anagrams of each other, otherwise false.

Function Signature:
 */

function isAnagram(str1, str2) {
  // implement the function here

 let sorted1 = str1.split('').sort().join('').toLowerCase();
 let sorted2 = str2.split('').sort().join('').toLowerCase();
  if (sorted1 === sorted2) {
    return true   }
    return false ;

  }

  console.log(isAnagram('hello', 'jello'));
  console.log(isAnagram('hello', 'loelh'));



