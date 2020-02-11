

// const texto = "Carlos assinou o abaixo-assinado";
const texto2 = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,';

/** Class */
// console.log(texto.match(/C|ab/));
// console.log(texto.match(/C|ab/i));
// console.log(texto.match(/C|ab/ig));

/** Texto */
// const regExp = new RegExp('9');
// console.log(regExp.test(texto2));
// console.log(regExp.exec(texto2));

const regexLetras = /[a-z]/g;
console.log(texto2.match(regexLetras));
console.log(texto2.search(regexLetras));