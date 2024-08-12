/* Exercise 1: Extended FizzBuzz

Problem Description:
Write a function fizzBuzz(n) that takes an integer n and prints numbers from 1 to n. 
For each multiple of 3, print "Fizz"; for each multiple of 5, print "Buzz"; and
for each multiple of both 3 and 5, print "FizzBuzz". If the number is not a multiple of any of 
these, print the number itself.

 */

function FizzBuzz(n)  {

    let i = 0;

    for  ( i = 1; i<=n ;i++) {
        if ( i % 3 === 0) {
            console.log( i + "Frizz")
        }
       else if ( i % 5 === 0) {
        console.log(i + "Buzz")
       }
       else console.log(i);
    }

}
FizzBuzz(15);

