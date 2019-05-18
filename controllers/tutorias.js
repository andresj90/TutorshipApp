const Tutoria = require('../model/tutoria');
const express = require('express');
const routerTutoria = express.Router();
const Usuario = require('../model/users');
const passport = require('passport');


//route to get set up a tutoring 
routerTutoria.get('/agendar', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    //verify that tutor exists 
    res.json({
        nombre: req.user
    })

})

routerTutoria.post('/agendar', (req, res) => {
    let infoTutoria = {
        codigo: req.body.codigo
    }
    Usuario.buscarUsuarioConNombreUsuario(infoTutoria.codigo, (err, tutor) => {
        if (err) {
            res.json({
                success: false,
                msg: "User does not exist"
            });
        } else {
            res.json({
                success: true,
                msg: "User does not exist",
                user: tutor
            });
        }
    });
})

routerTutoria.get('/prueba', (req, res) => {
    res.jsonp({
        status: true,
        email:false
    })
});

module.exports = routerTutoria;