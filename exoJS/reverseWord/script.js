/* Complete the function that accepts a string parameter,
 and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps" */

function reverseWords(str) {
    // Go for it
    let stringSplit = str.split('');
    let reverseArray = stringSplit.reverse("");
    let joinArray = reverseArray.join('');

   return joinArray;
  }

console.log(reverseWords("ciao  come  stai  ?"))

//Autres 


function reverseWords(str) {

    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

console.log(reverseWords("This is an example!"));
console.log(reverseWords("double  spaces"));     
