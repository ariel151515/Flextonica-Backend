const { Schema, model } = require("mongoose");

// Función para obtener el inicio de la semana actual
const getInicioSemanaActual = () => {
    const hoy = new Date();
    const diaDeLaSemana = hoy.getDay();
    const inicioSemana = new Date(hoy); // Clonar la fecha actual

    inicioSemana.setDate(hoy.getDate() - diaDeLaSemana); // Restar los días transcurridos desde el inicio de la semana (domingo)
    inicioSemana.setHours(0, 0, 0, 0); // Establecer la hora a las 00:00:00

    return inicioSemana;
};

// Función para obtener el fin de la semana actual
const getFinSemanaActual = () => {
    const inicioSemana = getInicioSemanaActual();
    const finSemana = new Date(inicioSemana); // Clonar la fecha de inicio de la semana

    finSemana.setDate(inicioSemana.getDate() + 6); // Sumar 6 días para llegar al sábado (fin de la semana)
    finSemana.setHours(23, 59, 59, 999); // Establecer la hora a las 23:59:59

    return finSemana;
};

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
    nota: {
        tipo: String,
        contenido: String
    },
    fechaDeInicioDeLaSemanaActual: {
        type: Date,
        default: getInicioSemanaActual // Utilizar la función para obtener el inicio de la semana actual como valor por defecto
    },
    fechaDeFindeLaSemanaActual: {
        type: Date,
        default: getFinSemanaActual // Utilizar la función para obtener el fin de la semana actual como valor por defecto
    }
}, {
    // Opciones adicionales del esquema
    timestamps: true // Habilita los campos createdAt y updatedAt
});

// Exportar el modelo 'MacrosSemanal' basado en el esquema
module.exports = model('MacrosSemanal', macrosSemanalSchema);
