const { Schema, model } = require("mongoose");

const userMacrosSemanal = new Schema({
    uid: {
        type: String,
        unique: false,
    },
    edad: {
        type: String,
        unique: false,
    },
    pesoInicial: {
        type: String,
        unique: false,
    },
    nivelDeActividad: {
        type: String,
        unique: false,
    },
    balanceEnergetico: {
        type: String,
        unique: false,
    },
    porcentaje: {
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
    }
}, {
    timestamps: true // Habilita los campos createdAt y updatedAt
});

module.exports = model('MacrosSemanal', userMacrosSemanal);
