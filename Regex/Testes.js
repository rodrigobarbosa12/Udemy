// Transformar snake_casa em camelCase

 const texto = 'pao_com_ovo';

 console.log(texto.match(/([a-z-A-Z0-9])+/gi));



//  console.log(texto.replace(/([^_])+/gi, '$1'));