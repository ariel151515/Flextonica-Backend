const { Schema, model } = require("mongoose");


// Esquema para los macros semanales
const macrosSemanalSchema = new Schema({
    // Identificador único del usuario
    uid: {
        type: String,
        unique: false // El uid no necesita ser único
    },
    // Objetivos de macronutrientes
    objetivos: {
        objetivo: { kcal: String, Carbohidratos: String, Grasas: String, Proteinas: String }, // Objetivo diario de macronutrientes
        totales: { kcal: String, Carbohidratos: String, Grasas: String, Proteinas: String }, // Totales planeados para la semana
        restantes: { kcal: String, Carbohidratos: String, Grasas: String, Proteinas: String } // Cantidad restante para alcanzar los objetivos
    },
    // Datos de la semana para cada día
    semana: {
       lunes: { kcal: String, gramosCarbohidratos: String, gramosGrasas: String, gramosProteinas: String, porcentajeCarbohidratos: String, porcentajeGrasas: String, porcentajeProteinas: String}, // Datos para el lunes
       martes: { kcal: String, gramosCarbohidratos: String, gramosGrasas: String, gramosProteinas: String, porcentajeCarbohidratos: String, porcentajeGrasas: String, porcentajeProteinas: String},
       miercoles: { kcal: String, gramosCarbohidratos: String, gramosGrasas: String, gramosProteinas: String, porcentajeCarbohidratos: String, porcentajeGrasas: String, porcentajeProteinas: String},
       jueves: { kcal: String, gramosCarbohidratos: String, gramosGrasas: String, gramosProteinas: String, porcentajeCarbohidratos: String, porcentajeGrasas: String, porcentajeProteinas: String},
       viernes: { kcal: String, gramosCarbohidratos: String, gramosGrasas: String, gramosProteinas: String, porcentajeCarbohidratos: String, porcentajeGrasas: String, porcentajeProteinas: String},
       sabado: { kcal: String, gramosCarbohidratos: String, gramosGrasas: String, gramosProteinas: String, porcentajeCarbohidratos: String, porcentajeGrasas: String, porcentajeProteinas: String},
       domingo: { kcal: String, gramosCarbohidratos: String, gramosGrasas: String, gramosProteinas: String, porcentajeCarbohidratos: String, porcentajeGrasas: String, porcentajeProteinas: String}
    },
    nota: {
        tipo: String,
        contenido: String
    },
    fechaInicio: {
        type: String,
    },
    fechaFin: {
        type: String,
    }
}, {
    // Opciones adicionales del esquema
    timestamps: true // Habilita los campos createdAt y updatedAt
});

// Exportar el modelo 'MacrosSemanal' basado en el esquema
module.exports = model('MacrosSemanal', macrosSemanalSchema);
