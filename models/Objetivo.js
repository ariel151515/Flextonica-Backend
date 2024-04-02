const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    uid: {
        type: String,
        unique: true,
    },
    nivelDeActividad: {
        type: String,
        unique: false,
    },
    edad: {
        type: String,
        unique: false,
    },
    deficitCalorico: {
        type: String,
        unique: false,
    },
    proteinas: {
        type: String,
        unique: false,
    },
    carbohidratos: {
        type: String,
        unique: false,
    },
    grasas: {
        type: String,
        unique: false,
    },
    margen: {
        type: String,
        unique: false,
    },
    tmb: {
        type: String,
        unique: false,
    },
    caloriasAConsumir: {
        type: String,
        unique: false,
    },
    pesoInicial:{
        type: String,
        unique: false,
    }
}, {
    timestamps: true // Habilita los campos createdAt y updatedAt
});



module.exports = model('Objetivo', userSchema);