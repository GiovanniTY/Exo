/* Prenez 2 chaînes s1 et s2n'incluez que les lettres de aà z.
 Renvoie une nouvelle chaîne triée , la plus longue possible, contenant des lettres distinctes 
 - chacune prise une seule fois - provenant de s1 ou s2.

Exemples :
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" */

function longest(s1, s2) {
    // your code
    const maxstring =  s1.replace(/[0-9]/g, '')+ s2.replace(/[0-9]/g, '');
    return Array.from(new Set(maxstring.split(''))).toString();
  }
  

  console.log(longest("abcdefghilmnopq12345567","world"));


  //other metods 

  function longest(s1, s2) {
    // your code
    
    
    return Array.from(new Set( s1 + s2)).sort().join('');
    }
  