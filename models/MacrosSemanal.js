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
        objetivo: { kcal: String, gramosCarbohidratos: String, gramosGrasas: String, gramosProteinas: String }, // Objetivo diario de macronutrientes
        totales: { kcal: String, gramosCarbohidratos: String, gramosGrasas: String, gramosProteinas: String }, // Totales planeados para la semana
        restantes: { kcal: String, gramosCarbohidratos: String, gramosGrasas: String, gramosProteinas: String } // Cantidad restante para alcanzar los objetivos
    },
    // Datos de la semana para cada día
    semana: {
       lunes: { 
            fecha: String, 
            kcal: String, 
            gramosCarbohidratos: String, 
            gramosGrasas: String, 
            gramosProteinas: String, 
            porcentajeCarbohidratos: String, 
            porcentajeGrasas: String, 
            porcentajeProteinas: String,
            comidas: [{nombre:String, alimentos: [{nombre:String}]}] 
        }, 
       martes: { 
            fecha: String, 
            kcal: String, 
            gramosCarbohidratos: String, 
            gramosGrasas: String, 
            gramosProteinas: String, 
            porcentajeCarbohidratos: String, 
            porcentajeGrasas: String, 
            porcentajeProteinas: String
        },
       miercoles: { 
            fecha: String, 
            kcal: String, 
            gramosCarbohidratos: String, 
            gramosGrasas: String, 
            gramosProteinas: String, 
            porcentajeCarbohidratos: String, 
            porcentajeGrasas: String, 
            porcentajeProteinas: String
        },
       jueves: { 
            fecha: String, 
            kcal: String, 
            gramosCarbohidratos: String, 
            gramosGrasas: String, 
            gramosProteinas: String, 
            porcentajeCarbohidratos: String, 
            porcentajeGrasas: String, 
            porcentajeProteinas: String
        },
       viernes: { 
            fecha: String, 
            kcal: String, 
            gramosCarbohidratos: String, 
            gramosGrasas: String, 
            gramosProteinas: String, 
            porcentajeCarbohidratos: String, 
            porcentajeGrasas: String, 
            porcentajeProteinas: String
        },
       sabado: { 
            fecha: String, 
            kcal: String, 
            gramosCarbohidratos: String, 
            gramosGrasas: String, 
            gramosProteinas: String, 
            porcentajeCarbohidratos: String, 
            porcentajeGrasas: String, 
            porcentajeProteinas: String
        },
       domingo: { 
            fecha: String, 
            kcal: String, 
            gramosCarbohidratos: String, 
            gramosGrasas: String, 
            gramosProteinas: String, 
            porcentajeCarbohidratos: String, 
            porcentajeGrasas: String, 
            porcentajeProteinas: String
        }
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

