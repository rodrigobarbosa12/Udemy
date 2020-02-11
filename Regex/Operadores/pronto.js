const texto = '1,2,3,4,5,a.b c!d';

console.log(texto.match(/1.2/g));
console.log(texto.match(/1..2/g));
console.log(texto.match(/1..,/g));

const notas = '8.7,8.9,5.6,10.5';

console.log(notas.match(/8../g));
console.log(notas.match(/.\../g));