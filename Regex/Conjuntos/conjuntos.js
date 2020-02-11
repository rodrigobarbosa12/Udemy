const pares = '0,1,2,3,4,5,6,7,8,9, a, b, c, d, e';
const texto = 'João não vai andar na moto.';

const regexPares = /[02468]/g;
const regex = /n[aã]/g

console.log(pares.match(regexPares));
console.log(texto.match(regex));