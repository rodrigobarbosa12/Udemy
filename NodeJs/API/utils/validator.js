module.exports = {

    /**
     * @method assert Valida se o campo 'nome' esta vazio
     */
    user:(app, req, res) => {
        req.assert('nome', 'O nome é obrigatório').notEmpty();
        req.assert('email', 'Email invalido').notEmpty().isEmail();

        const errors = req.validationErrors();

        if (errors) {
            app.utils.error.send(errors, req, res);
            return false;
        } else {
            return true;
        }
    }
}