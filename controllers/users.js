const express = require("express");
const routerUsuario = express.Router(); //interface to create the own routes for the users of our app
const Usuario = require('../model/users');

routerUsuario.get('/perfil', (req, res, next) => {
    res.send({
        "usuario": "andres"
    });
});

routerUsuario.post('/login', (req, res, next) => {

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
     
    /*res.json is important for the observable that does validation from the front 
     it has to always be put when doing businness logic operations
    */ 
    Usuario.agregarUsuario(nuevoUsuario, (err) => {
        if(err) {
            res.json({
              sucess: false, 
              msg: "Usuario no pudo ser agregado"
            });
            console.log(err)
        }else {
            res.json({
              sucess:true,
              msg: "Usuario agregado al sistema" 
            
            })
        }
    })
  
});

module.exports = routerUsuario;