const texto = `,1,2,3,4,5,6a,b c!d?e\r -
f_g`;

console.log(texto.match(/\d/g)); // [0-9]
console.log(texto.match(/\D/g)); // [^0-9]

console.log(texto.match(/\w/g)); // [a-zA-Z0-9]
console.log(texto.match(/\W/g)); // [^a-zA-Z0-9]

console.log(texto.match(/\s/g)); // [ \t \n \r \f]
console.log(texto.match(/\S/g)); // [^ \t \n \r \f]