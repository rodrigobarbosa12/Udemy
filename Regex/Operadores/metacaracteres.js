const texto = '1,2,3,4,5,a.b c!d';

console.log(texto.split(/\./));

console.log(texto.split(/,|\.|\!| /g));
