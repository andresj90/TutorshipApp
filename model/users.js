const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); // Bcrypt to encrypt the passwords with a hash 

//this is the schema our database will have
const usuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        lowercase: true,
        default: null
    },
    apellido: {
        type: String,
        required: true,
        lowercase: true,
        default: null
    },

    codigo: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    contrasena: {
        type: String,
        required: true
    },

    rol: [{
        type: Number,
        required: true,
        set: v => Math.round(v),
        get: v => Math.random(v),
        default: 0
    }],
    programa: {
        type: String,
        required: true,
        default: null,
        lowercase: true,
        enum: ["ingenieria de sistemas", "matematicas"]
    },

    debilidades: [{
        type: String,
        required: true,
        default: null,
        lowercase: true
    }],
    fortalezas: [{
        type: String,
        required: true,
        default: null,
        lowercase: true
    }]
});

//this is the collection in mongoDB
const Usuario = module.exports =  mongoose.model('Usuario', usuarioSchema);

//methods for the businnes logic
module.exports.agregarUsuario = function (nuevoUsuario, callback) {
    /* I get the user entered into the system and then sfter validating 
    that the data is correct 
    */
     bcrypt.genSalt(10,((err, salt)  => {
         if(err) throw err;
         bcrypt.hash(nuevoUsuario.contrasena, salt, (err, hash) => {
             if(err) throw err; 
             nuevoUsuario.contrasena = hash; 
             nuevoUsuario.save(callback);
         });
     }));
}

module.exports.buscarUsuarioConId = function(idUsuario, callback) {
    Usuario.findById({_id:idUsuario}, callback);
}

module.exports.buscarUsuarioConNombreUsuario = function (nombreUsuario, callback) {
     Usuario.findOne({
         $or: [{codigo: nombreUsuario}, {email: nombreUsuario}]
     }, callback);
}

module.exports.compararContrasena = function(contrasenaIngresada, contrasenaUsuario, callback) {
    bcrypt.compare(contrasenaIngresada, contrasenaUsuario, (err,success) => {
        if(err) throw err; 
        callback(null, success);
    })
}