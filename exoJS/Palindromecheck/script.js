/* Exercise 6: Palindrome Check
Problem Description:
Write a function isPalindrome(str) 
that takes a string and returns true if it is a palindrome, otherwise false. */

function isPalindrome(str) {
    // implement the function here

    //convert string in array 
   const  arrayValues = str.split('');

   //reverse the array value 
   const  reverseArrayValue = arrayValues.reverse(); 

   //convert array in a string 
   const reverseString = reverseArrayValue.join('');

   if (str === reverseString) { 
    console.log('It is a palindrome')
   }
   else  console.log('It is not a palindrome');


  }
  
 isPalindrome('hello');
  