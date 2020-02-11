const texto = 'João é calmo, mas no transito fica pistola.';

console.log(texto.match(/[\wÀ-ú]+/g));

// Positive lookahead
console.log(texto.match(/[\wÀ-ú]+(?=,)/g));
console.log(texto.match(/[\wÀ-ú]+(?=\.)/g));
console.log(texto.match(/[\wÀ-ú]+(?=, mas)/g));

// Negative lookahead
console.log(texto.match(/[\wÀ-ú]+(?!,)/g));
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!\.)/g));