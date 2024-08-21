/* 
Fibonacci Sequence: Write a function 
that returns the first n numbers of the Fibonacci sequence. */
function fibonacciSequence(num) {
    let result = [];
 
let n1 = 0, n2 = 1, nextTerm;
console.log('Fibonacci Series: ');

for (let i = 1; i <= num; i++) {
    result.push(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
return result;
}

console.log(fibonacciSequence(10));
/* 

Palindrome Check: 
Create a function that checks whether a string is a palindrome. */
function checkPalindrome(string){

    stringLower = string.toLowerCase();
    stringSplit = stringLower.split('');
    stringReverse = stringSplit.reverse();
    
  /*   console.log(stringSplit);
    console.log(stringSplit2);
    console.log(ReverseString); */

    
    if  (stringSplit === stringReverse) {
    
        console.log('true');

    }else {
        console.log('false') ;
    }
    
}


checkPalindrome('Able was I ere I saw Elba');

/* Debouncing Function: Implements a debounce function to limit how often a function executes. */
function debouncingFunction(func, delay) {
    let timeoutId; // Variable to save the id of timeout

    return function(...args) {
        //remove the previesly timeout if call the  function 
        if (timeoutId) clearTimeout(timeoutId);

        // add a new timeout to execute the function after the delay 
        timeoutId = setTimeout(() => {
            func(...args); //execute  function after  delay
        }, delay);
    }
}


/* Promise All: Write a function that takes
 an array of Promises and returns a Promise that resolves when all Promises are resolved. */

 function promiseAll(promises){

    return new Promise((resolve, reject) => {
        const results =  [];
        let completedPromises = 0;

        //if array empty, solve it immediately
        if (promiseAll.length === 0) {
            resolve([]);
        }

        promises.forEach((promise, index )=> {
       // Let's make sure it's a promise using `Promise.resolve`
       Promise.resolve(promise)
       .then((result) => {
        results[index] = result;
        completedPromises += 1;

        //if all promises are completed, solve them
        if (completedPromises ===promises.length) {
            resolve(results);
        }

       })
       .catch((error) => {
        //if one promise fail, reject all promises
        reject(error);
       });
            
        });
    });
 }
