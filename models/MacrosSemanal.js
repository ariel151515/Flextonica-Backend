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
            nota: String,
            fecha: String, 
            kcal: String, 
            gramosCarbohidratos: String, 
            gramosGrasas: String, 
            gramosProteinas: String, 
            porcentajeCarbohidratos: String, 
            porcentajeGrasas: String, 
            porcentajeProteinas: String,
            comidas: [
                {
                    Nombre:String, 
                    Alimentos: [
                        {
                            Nombre: String, 
                            Calorias: String,
                            Proteinas: String,
                            Carbohidratos: String,
                            Fibra: String,
                            Azucar: String,
                            Grasas: String,
                            GrasasSaturadas: String,
                            GrasasPoliinsaaturadas: String,
                            GrasasMonoinsaturadas: String,
                            GrasasTrans: String,
                            Colesterol: String,
                            Sodio: String,
                            Potasio: String,
                            VitaminaA: String,
                            VitaminaC: String,
                            Calcio: String,
                            Hierro: String
                        }
                    ]
                }
            ] 
        }, // Fin Lunes
        martes: { 
            nota: String,
            fecha: String, 
            kcal: String, 
            gramosCarbohidratos: String, 
            gramosGrasas: String, 
            gramosProteinas: String, 
            porcentajeCarbohidratos: String, 
            porcentajeGrasas: String, 
            porcentajeProteinas: String,
            comidas: [
                {
                    Nombre:String, 
                    Alimentos: [
                        {
                            Nombre: String, 
                            Calorias: String,
                            Proteinas: String,
                            Carbohidratos: String,
                            Fibra: String,
                            Azucar: String,
                            Grasas: String,
                            GrasasSaturadas: String,
                            GrasasPoliinsaaturadas: String,
                            GrasasMonoinsaturadas: String,
                            GrasasTrans: String,
                            Colesterol: String,
                            Sodio: String,
                            Potasio: String,
                            VitaminaA: String,
                            VitaminaC: String,
                            Calcio: String,
                            Hierro: String
                        }
                    ]
                }
            ] 
        }, // Fin Martes
        miercoles: { 
            nota: String,
            fecha: String, 
            kcal: String, 
            gramosCarbohidratos: String, 
            gramosGrasas: String, 
            gramosProteinas: String, 
            porcentajeCarbohidratos: String, 
            porcentajeGrasas: String, 
            porcentajeProteinas: String,
            comidas: [
                {
                    Nombre:String, 
                    Alimentos: [
                        {
                            Nombre: String, 
                            Calorias: String,
                            Proteinas: String,
                            Carbohidratos: String,
                            Fibra: String,
                            Azucar: String,
                            Grasas: String,
                            GrasasSaturadas: String,
                            GrasasPoliinsaaturadas: String,
                            GrasasMonoinsaturadas: String,
                            GrasasTrans: String,
                            Colesterol: String,
                            Sodio: String,
                            Potasio: String,
                            VitaminaA: String,
                            VitaminaC: String,
                            Calcio: String,
                            Hierro: String
                        }
                    ]
                }
            ] 
        }, // Fin Miercoles
        jueves: { 
            nota: String,
            fecha: String, 
            kcal: String, 
            gramosCarbohidratos: String, 
            gramosGrasas: String, 
            gramosProteinas: String, 
            porcentajeCarbohidratos: String, 
            porcentajeGrasas: String, 
            porcentajeProteinas: String,
            comidas: [
                {
                    Nombre:String, 
                    Alimentos: [
                        {
                            Nombre: String, 
                            Calorias: String,
                            Proteinas: String,
                            Carbohidratos: String,
                            Fibra: String,
                            Azucar: String,
                            Grasas: String,
                            GrasasSaturadas: String,
                            GrasasPoliinsaaturadas: String,
                            GrasasMonoinsaturadas: String,
                            GrasasTrans: String,
                            Colesterol: String,
                            Sodio: String,
                            Potasio: String,
                            VitaminaA: String,
                            VitaminaC: String,
                            Calcio: String,
                            Hierro: String
                        }
                    ]
                }
            ] 
        }, // Fin Jueves
        viernes: { 
            nota: String,
            fecha: String, 
            kcal: String, 
            gramosCarbohidratos: String, 
            gramosGrasas: String, 
            gramosProteinas: String, 
            porcentajeCarbohidratos: String, 
            porcentajeGrasas: String, 
            porcentajeProteinas: String,
            comidas: [
                {
                    Nombre:String, 
                    Alimentos: [
                        {
                            Nombre: String, 
                            Calorias: String,
                            Proteinas: String,
                            Carbohidratos: String,
                            Fibra: String,
                            Azucar: String,
                            Grasas: String,
                            GrasasSaturadas: String,
                            GrasasPoliinsaaturadas: String,
                            GrasasMonoinsaturadas: String,
                            GrasasTrans: String,
                            Colesterol: String,
                            Sodio: String,
                            Potasio: String,
                            VitaminaA: String,
                            VitaminaC: String,
                            Calcio: String,
                            Hierro: String
                        }
                    ]
                }
            ] 
        }, // Fin Viernes
        Sabado: { 
            nota: String,
            fecha: String, 
            kcal: String, 
            gramosCarbohidratos: String, 
            gramosGrasas: String, 
            gramosProteinas: String, 
            porcentajeCarbohidratos: String, 
            porcentajeGrasas: String, 
            porcentajeProteinas: String,
            comidas: [
                {
                    Nombre:String, 
                    Alimentos: [
                        {
                            Nombre: String, 
                            Calorias: String,
                            Proteinas: String,
                            Carbohidratos: String,
                            Fibra: String,
                            Azucar: String,
                            Grasas: String,
                            GrasasSaturadas: String,
                            GrasasPoliinsaaturadas: String,
                            GrasasMonoinsaturadas: String,
                            GrasasTrans: String,
                            Colesterol: String,
                            Sodio: String,
                            Potasio: String,
                            VitaminaA: String,
                            VitaminaC: String,
                            Calcio: String,
                            Hierro: String
                        }
                    ]
                }
            ] 
        }, // Fin Sabado
        domingo: { 
            nota: String,
            fecha: String, 
            kcal: String, 
            gramosCarbohidratos: String, 
            gramosGrasas: String, 
            gramosProteinas: String, 
            porcentajeCarbohidratos: String, 
            porcentajeGrasas: String, 
            porcentajeProteinas: String,
            comidas: [
                {
                    Nombre:String, 
                    Alimentos: [
                        {
                            Nombre: String, 
                            Calorias: String,
                            Proteinas: String,
                            Carbohidratos: String,
                            Fibra: String,
                            Azucar: String,
                            Grasas: String,
                            GrasasSaturadas: String,
                            GrasasPoliinsaaturadas: String,
                            GrasasMonoinsaturadas: String,
                            GrasasTrans: String,
                            Colesterol: String,
                            Sodio: String,
                            Potasio: String,
                            VitaminaA: String,
                            VitaminaC: String,
                            Calcio: String,
                            Hierro: String
                        }
                    ]
                }
            ] 
        }, // Fin Domingo
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

