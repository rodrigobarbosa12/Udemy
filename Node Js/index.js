/** 
 * Carrega o modulo
 * express contem o modulo http
 */
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');


const app = express();

/**
 * bodyParser.json transforma os dados do POST em jeson
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * @method include() inclui todos os arquivos de 'routes'
 * @method into() adiciona ao 'app'
 */
consign().include('routes').into(app);

app.listen(3000, '127.0.0.1', ()=> {
    console.log('Servidor rodando!');
});
