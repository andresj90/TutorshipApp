const express = require("express");
const routerUsuario = express.Router(); //interface to create the own routes for the users of our app
const Usuario = require('../model/users');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const configDB = require('../config/database');

routerUsuario.get('/perfil', (req, res, next) => {
    res.send({
        "usuario": "andres"
    });
});

routerUsuario.post('/login', (req, res, next) => {
    let loginCredentials = {
        usuario: req.body.usuario,
        contrasena: req.body.contrasena
    }

    Usuario.buscarUsuarioConNombreUsuario(loginCredentials.usuario, (err, usuario) => {
        if (err) throw err;
        if (!usuario) {
            res.json({
                sucess: false,
                msg: 'Usuario no encontrado'
            })
        }

        Usuario.compararContrasena(loginCredentials.contrasena, usuario.contrasena, (err, success) => {
            if (success) {
                const tokenGenerado = jwt.sign({
                    usuario: usuario
                }, configDB.database.secret, {
                    expiresIn: 55555555
                });

                res.json({
                    success: true,
                    usuario: {
                        nombre: usuario.nombre,
                        apellido: usuario.apellido,
                        codigo: usuario.codigo,
                        email: usuario.email,
                        contrasena: usuario.constrasena,
                        programa: usuario.programa,
                        token: 'JWT ' + tokenGenerado
                    }
                });
            } else {
                res.json({
                    success: false,
                    msg: 'Contraseña Incorrecta'
                })
            }
        })
    })
});

routerUsuario.post('/registrarse', (req, res) => {
    //create object of type Usuario which is our collection class for usuarios
    let nuevoUsuario = new Usuario({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        codigo: req.body.codigo,
        email: req.body.email,
        contrasena: req.body.constrasena,
        programa: req.body.programa
    });
    /*confirm that both email and user  have not been added to the database */
    Usuario.verificarUsuario(nuevoUsuario.codigo, (err, usuario) => {
        if (err || usuario) {
            res.json({
                success: false,
                msg: 'No se pudo agregar codigo de usuario'
            });
        } else {
            Usuario.verificarEmail(nuevoUsuario.email, (err, usuario) => {
                if (err || usuario) {
                    res.json({
                        success: false,
                        msg: 'No se pudo agregar email de usuario'
                    });
                } else {

                    Usuario.agregarUsuario(nuevoUsuario, (err) => {
                        if (err) {
                            res.json({
                                sucess: false,
                                msg: "Usuario no pudo ser agregado"
                            });
                            console.log(err)
                        } else {
                            res.json({
                                sucess: true,
                                msg: "Usuario agregado al sistema"

                            })
                        }
                    });
                }

            })
        }
        /*res.json is important for the observable that does validation from the front 
         it has to always be put when doing businness logic operations
        */
    });

});

module.exports = routerUsuario;