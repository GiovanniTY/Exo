/* Dans une petite ville, la population est p0 = 1000au début d'une année.
 La population augmente régulièrement de 2 percentpar an et de plus 50de nouveaux habitants
  viennent habiter la ville chaque année. De combien d'années la ville a-t-elle besoin pour 
  voir sa population supérieure ou égale à p = 1200habitants ?

 */


function nbYear(p0, percent, aug, p) {
    // your code
let years = 0;
let population = p0;

while (population < p) {
    population += population * (percent / 100) + aug;
    years++;
}
return years;
}

console.log(nbYear(1000,2,50,1200));