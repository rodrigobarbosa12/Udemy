const texto = `
    Lista telefônica:
    - (11) 95234-6082
    - (11) 98756-7892
    - 4475-3295
    - +5511952346082
    - +55 (11) 952346082
`;

console.log(texto.match(/\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g));