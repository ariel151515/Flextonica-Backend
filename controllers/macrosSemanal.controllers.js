const MacrosSemanal = require('../models/MacrosSemanal');

// Crea un documento de macros semanal
exports.macrosSemanal = async (req, res) => {
    const { uid } = req.params;

    try {
        // Verificar si ya existe un documento macrosSemanal
        const macrosSemanal = await MacrosSemanal.findOne({ uid });

        if (macrosSemanal) {
            console.log('Ya existe un macrosSemanal para este usuario');
            return res.status(400).json({ message: 'Ya existe un objeto MacrosSemanal para este usuario' });
        }

        // Crear un nuevo documento de macrosSemanal
        const newMacrosSemanal = new MacrosSemanal({ 
            uid,
            objetivos: {
                objetivo: { kcal: '0', Carbohidratos: '0', Grasas: '0', Proteinas: '0' }, // Objetivo diario de macronutrientes
                totales: { kcal: '0', Carbohidratos: '0', Grasas: '0', Proteinas: '0' }, // Totales planeados para la semana
                restantes: { kcal: '0', Carbohidratos: '0', Grasas: '0', Proteinas: '0' } // Cantidad restante para alcanzar los objetivos
            },
            semana: {
                lunes: { kcal: '0', Carbohidratos: '0', Grasas: '0', Proteinas: '0' }, // Datos para el lunes
                martes: { kcal: '0', Carbohidratos: '0', Grasas: '0', Proteinas: '0' }, // Datos para el martes
                miercoles: { kcal: '0', Carbohidratos: '0', Grasas: '0', Proteinas: '0' }, // Datos para el miércoles
                jueves: { kcal: '0', Carbohidratos: '0', Grasas: '0', Proteinas: '0' }, // Datos para el jueves
                viernes: { kcal: '0', Carbohidratos: '0', Grasas: '0', Proteinas: '0' }, // Datos para el viernes
                sabado: { kcal: '0', Carbohidratos: '0', Grasas: '0', Proteinas: '0' }, // Datos para el sábado
                domingo: { kcal: '0', Carbohidratos: '0', Grasas: '0', Proteinas: '0' } // Datos para el domingo
            },
            nota: {
                contenido: '0'
            },
            fechaDeInicioDeLaSemanaActual:{
              type: Date,
              default: Date.now()
            },
            fechaDeFindeLaSemanaActual:{
                type: Date,
                default: Date.now()
              },
        });

        // Guardar el nuevo documento en la base de datos
        await newMacrosSemanal.save();

        // Enviar una respuesta al cliente
        res.status(201).json({ message: 'MacrosSemana creado correctamente' });

    } catch (err) {
        console.log('Error al crear macrosSemana', err);
        res.status(500).json({ message: 'Error al crear macrosSemana' });
    }
}
