const texto = ',1,2,3,4,5,6,7,8,9 a,b,c,[d,e%,F, ~g~, h, I, <J';

console.log(texto.match(/[a-z]/g));
console.log(texto.match(/[b-d]/g));
console.log(texto.match(/[2-4]/g));
console.log(texto.match(/[A-Z1-3]/gi));