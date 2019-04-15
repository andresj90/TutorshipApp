const express = require("express");
const routerUsuario = express.Router(); //interface to create the own routes for the users of our app

routerUsuario.get('/perfil', (req, res) => {
    res.send({
        "usuario": "andres"
    });
});

routerUsuario.post('/login', (req, res) => {

});

routerUsuario.post('registrarse', (req, res) => {

});

module.exports = routerUsuario;