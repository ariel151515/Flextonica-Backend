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
        lunes: { kcal: String, Carbohidratos: String, Grasas: String, Proteinas: String }, // Datos para el lunes
        martes: { kcal: String, Carbohidratos: String, Grasas: String, Proteinas: String }, // Datos para el martes
        miercoles: { kcal: String, Carbohidratos: String, Grasas: String, Proteinas: String }, // Datos para el miércoles
        jueves: { kcal: String, Carbohidratos: String, Grasas: String, Proteinas: String }, // Datos para el jueves
        viernes: { kcal: String, Carbohidratos: String, Grasas: String, Proteinas: String }, // Datos para el viernes
        sabado: { kcal: String, Carbohidratos: String, Grasas: String, Proteinas: String }, // Datos para el sábado
        domingo: { kcal: String, Carbohidratos: String, Grasas: String, Proteinas: String } // Datos para el domingo
    },
    nota:{
        tipo: String,
        contenido: String
    }
}, {
    // Opciones adicionales del esquema
    timestamps: true // Habilita los campos createdAt y updatedAt
});

// Exportar el modelo 'MacrosSemanal' basado en el esquema
module.exports = model('MacrosSemanal', macrosSemanalSchema);
