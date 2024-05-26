const { Schema, model } = require("mongoose");

const alimentoSchema = new Schema({
    uid: { 
        type: String,
        unique: false,
    },
    marca: { 
        type: String,
        unique: false,
    },
    descripcion: { 
        type: String,
        unique: false,
    },
    porcionEnGramos: { 
        type: String,
        unique: false,
    },
    calorias: { 
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
    caloriasPorGramo: { 
        type: String,
        unique: false,
    },
    proteinasPorGramo: { 
        type: String,
        unique: false,
    },
    carbohidratosPorGramo: { 
        type: String,
        unique: false,
    },
    grasasPorGramo: { 
        type: String,
        unique: false,
    },
    saludable: { 
        type: String,
        unique: false,
    },
}, {
    timestamps: true // Habilita los campos createdAt y updatedAt
});

module.exports = model('Alimento', alimentoSchema);
