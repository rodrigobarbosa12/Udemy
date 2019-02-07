
const Nedb = require('nedb');

// Cria um banco de dados
const db = new Nedb({
    filename: 'users.db',
    autoload: true // se o arquivo nao existir é criado automaticamente
});

module.exports = (app) => {
    app.get('/users', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.json({
            Users: [{
                name: 'Rodrigo Barbosa',
                email: 'rodrigocorsarios@hotmail.com',
                id: 1
            }]
        });
    });
    
    // dados enviados via post fica dentro de body
    app.post('/users', (req, res) => {

        //'req.body' Objeto que quero inserir 
        db.insert(req.body, (err, user) => {
            if (err) {

                console.log('Error:', err);
                res.status(400).json({
                    error: err
                })

            } else {

                res.status(200).json(user);

            }
        });
    });
}
