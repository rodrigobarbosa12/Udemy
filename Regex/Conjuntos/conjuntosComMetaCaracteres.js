const texto = '.$+*?-';

console.log(texto.match(/[+.*?$-]/g));
console.log(texto.match(/[$-?]/g));

// Não é um intervalo

console.log(texto.match(/[$\-?]/g));
console.log(texto.match(/[-?]/g));