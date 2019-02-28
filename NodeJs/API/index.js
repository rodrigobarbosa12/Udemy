/** 
 * @method require Carrega os modulos.
 * @module express Contem o modulo http.
 */
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();

/**
 * @param bodyParser.json Transforma os dados do POST em jeson.
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());

/**
 * @method include Inclui todos os arquivos de 'routes'.
 * @method include Inclui todos os arquivos de 'utils'.
 * @method into Adiciona ao 'app'.
 * @exemple app.routes.ARQUIVO.metodo
 * @exemple app.utils.ARQUIVO.metodo
 */
consign().include('routes').include('utils').into(app);

app.listen(3000, '127.0.0.1', ()=> {
    console.log('Servidor rodando!');
});
