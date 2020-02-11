const texto = 'Romário era um excelente jogador\n, mas hoje é um políticoquestionador';

console.log(texto.match(/^r.*r$/gi)); // Problema do dotall (por causa do \n)
console.log(texto.match(/^r[\s\S ]*r$/gi));