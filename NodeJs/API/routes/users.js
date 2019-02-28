
const Nedb = require('nedb');

/**
 * @object Nedb cria um banco de dados.
 * Se o arquivo nao existir é criado automaticamente.
 */ 
const db = new Nedb({
    filename: 'users.db',
    autoload: true 
});

module.exports = (app) => {
    const route = app.route('/users');
    const routeId = app.route('/users/:id');

    /**
     * @param req Dados a ser enviado.
     * @param req.body Objeto que quero inserir.
     */
    route.post((req, res) => {
        
        if (!app.utils.validator.user(app, req, res)) return false;

        db.insert(req.body, (err, user) => {
            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(user);
            }
        });
    });

    /** 
     * @method find Traz todos os registros.
     * @method sort Ordena os registros 1 crescente ou -1 decrescente
    */
    route.get((req, res) => {
        db.find({}).sort({ nome:1 }).exec((err, users) => {
            if (err) {
                    app.utils.error.send(err, req, res); 
            } else {
                res.statusCode = 200;
                res.setHeader('Content-type', 'application/json');
                res.json({
                    users
                });
            }
        });

    });

        /**
         * @method findOne Localiza apenas um registro.
         */
    routeId.get((req, res) => {
        db.findOne({ _id:req.params.id }).exec((err, user) => {
            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(user);
            }
        });
    });


    /**
     * @param req.body São os dados a serem atualizados.
     */
    routeId.put((req, res) => {
        db.update({ _id:req.params.id }, req.body, err => {
            if (err) {
                app.utils.error.send(err, req, res);
            } else { 
                res.status(200).json(Object.assign(req.params, req.body));
            }
        });
    });

    /**
     * @param remove Primeiro parametro onde quer excluir.
     * @param remove Segundo parametro é opçao, excluir 1 ou mais.
     * @param remove Terceiro parametro é uma função de callback.
     */
    routeId.delete((req, res) => {
        db.remove({ _id:req.params.id }, {}, err => {
            if (err) {
                app.utils.error.send(err, req, res);
            } else { 
                res.status(200).json(req.params);
            }
        })
    });
}
