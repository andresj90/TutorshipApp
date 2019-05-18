const mongoose = require('mongoose');



//Tutoria Schema
const tutoriaSchema = mongoose.Schema({
    estudiante: {
        type: String,
        required: true
    },
    tutor: {
        type: String,
        required: true
    },
    tema: {
        nombre_tema: {
            type: String,
            required: true,
        },
        nombre_area: {
            type: String,
            required: true
        }
    },
    ubicacion: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    },
    estado: [{
        type: Number
    }],
    calificacion: {
        type: Number,
    },
    comentario: {
        fecha: {
            type:String
        },
        texto: {
            type: String
        }
    }
});

//The model (collection) this is what will appear on the database in the collection
module.exports = Tutoria = mongoose.model('Tutoria', tutoriaSchema);

//businness logic

module.exports.agregarTurtoria = function (nuevaTuroria, callback) {
    
}