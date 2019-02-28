/* @flow */

import xhr from '../utils/xhr';

const titulo = document.querySelector('#titulo');
titulo.innerHTML = 'Ola Mundo!'

const listarUsuarios = async () => {
    try {
        const { data: { users } } = await xhr.get('/users/');
        return users
    } catch (error) {
        alert(error);
    }
};

const cadastrarUsuario = async (dados) => {
    try {
        await xhr.post('/users/', dados);
    } catch (error) {
        alert(error);
    }
};

const apagarUsuario = async (id) => {
    try {
        await xhr.delete(`/users/${id}`);
    } catch (error) {
        alert(error);
    }
};

const editarUsuario = async (usuarios, dados) => {
    usuarios.forEach(async (usuario) => {
        try {
            await xhr.put(`/users/${usuario._id}`, dados);
        } catch (error) {
            alert(error);
        }
    });
};


const init = async (cadastro, editar) => {
    // cadastrarUsuario(cadastro);

    const usuarios = await listarUsuarios();

    editarUsuario(usuarios, editar);

    apagarUsuario('');
};


const cadastro = {
    nome: "Rodrigo Barbosa",
    email: "rodrigocorsarios@hotmail.com",
    senha: "RodrigoLindao",
};

const editar = {
    nome: "Fui editado",
    email: "rodrigocorsarios@hotmail.com",
    senha: "RodrigoLindao",
};

init(cadastro, editar);
