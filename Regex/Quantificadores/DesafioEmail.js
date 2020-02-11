const texto = `
Os emails dos convidados são:
    rodrigocorsarios@hotmail.com
    paocomovo.com.br
    paocom@ovo.net.io
    paocom_ovo@lanchonete.net.io
    gata9nhado@vrau.net
    empresa.ninja@topzera.com.br
`;

console.log(texto.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/ig));