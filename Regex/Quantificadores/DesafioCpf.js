const texto = `CPF do aprovados:
    - 447.895.938-27
    - 069.481.278-19
    - 447.532.951-23
`;

console.log(texto.match(/\d{3}\.\d{3}\.\d{3}\-\d{2}/g));
// ouu
console.log(texto.match(/[\d{3}\.]+-\d{2}/g));