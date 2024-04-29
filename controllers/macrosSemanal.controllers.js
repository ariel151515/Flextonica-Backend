const MacrosSemanal = require('../models/MacrosSemanal');

// Crea un documento de macros semanal
exports.macrosSemanal = async (req, res) => {
    const { uid } = req.params;
    const { inicioSemana, finSemana } = req.body;

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
            fechaInicio: inicioSemana,
            fechaFin: finSemana
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


// Trae por uid y por fechas un documento de macrsSemana
exports.getMacrosSemanal = async (req, res) => {
    const { uid, inicioSemana, finSemana } = req.params;

    console.log(inicioSemana, finSemana);

    try {
        const macrosSemanal = await MacrosSemanal.findOne({ uid, fechaInicio: inicioSemana, fechaFin:finSemana});
        if (!macrosSemanal) {
            return res.status(404).json({ message: 'No se encontró MacrosSemanal para este usuario' });
        }
        res.status(200).json({ macrosSemanal });
        
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error al obtener MacrosSemanal' });
    
    }
}