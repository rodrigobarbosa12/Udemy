const texto = 'ABC [abc] a-c 123';

console.log(texto.match(/[a-c]/g));
console.log(texto.match(/a-c/g));// Não define um range

console.log(texto.match(/[Z-z]/g)); // Intervalos usam a ordem da tabela UNICODE

// Não respeita a ordem da tabela unicode

console.log(texto.match(/[z-A]/g));
console.log(texto.match(/[4-1]/g));