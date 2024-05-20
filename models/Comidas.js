const { Schema, model } = require("mongoose");

const comidasSchema = new Schema({
    idComida: { // a la comida que pertenece
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
    },
    caloriasaconsumir: {
        type: String,
        unique: false,
    },
    gramosProteinas: {
        type: String,
        unique: false,
    },
    gramosCarbohidratos: {
        type: String,
        unique: false,
    },
    gramosGrasas: {
        type: String,
        unique: false,
    },
}, {
    timestamps: true // Habilita los campos createdAt y updatedAt
});

module.exports = model('Comidas', comidasSchema);
