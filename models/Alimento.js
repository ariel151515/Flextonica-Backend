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
    fibra: { 
        type: String,
        unique: false,
    },
    azucar: { 
        type: String,
        unique: false,
    },
    grasas: { 
        type: String,
        unique: false,
    },
    grasasSaturadas: { 
        type: String,
        unique: false,
    },
    grasasPoliinsaturadas: { 
        type: String,
        unique: false,
    },
    grasasMonoinsaturadas: { 
        type: String,
        unique: false,
    },
    grasasTrans: { 
        type: String,
        unique: false,
    },
    colesterol: { 
        type: String,
        unique: false,
    },
    sodio: { 
        type: String,
        unique: false,
    },
    potasio: { 
        type: String,
        unique: false,
    },
    vitaminaA: { 
        type: String,
        unique: false,
    },
    vitaminaC: { 
        type: String,
        unique: false,
    },
    calcio: { 
        type: String,
        unique: false,
    },
    hierro: { 
        type: String,
        unique: false,
    },
    saludable: { 
        type: Boolean,
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
    fibraPorGramo: { 
        type: String,
        unique: false,
    },
    azucarPorGramo: { 
        type: String,
        unique: false,
    },
    grasasPorGramo: { 
        type: String,
        unique: false,
    },
    grasasSaturadasPorGramo: { 
        type: String,
        unique: false,
    },
    grasasPoliinsaturadasPorGramo: { 
        type: String,
        unique: false,
    },
    grasasMonoinsaturadasPorGramo: { 
        type: String,
        unique: false,
    },
    grasasTransPorGramo: { 
        type: String,
        unique: false,
    },
    colesterolPorGramo: { 
        type: String,
        unique: false,
    },
    sodioPorGramo: { 
        type: String,
        unique: false,
    },
    potasioPorGramo: { 
        type: String,
        unique: false,
    },
    vitaminaAPorGramo: { 
        type: String,
        unique: false,
    },
    vitaminaCPorGramo: { 
        type: String,
        unique: false,
    },
    calcioPorGramo: { 
        type: String,
        unique: false,
    },
    hierroPorGramo: { 
        type: String,
        unique: false,
    }
}, {
    timestamps: true // Habilita los campos createdAt y updatedAt
});

module.exports = model('Alimento', alimentoSchema);
