const MacrosSemanal = require('../models/MacrosSemanal');

// Crea un documento de macros semanal
exports.macrosSemanal = async (req, res) => {
    const { uid } = req.params;
    const { inicioSemana, finSemana } = req.body;

    // Verificar si se proporciona un UID
    if (!uid) {
        return res.status(400).json({ message: 'Se requiere un UID para crear un objetivo' });
     }

    try {
        // Verificar si ya existe un documento macrosSemanal
        const macrosSemanal = await MacrosSemanal.findOne({ uid, fechaInicio:inicioSemana, fechaFin:finSemana});

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

    // Verificar si se proporciona un UID válido
    if (!uid || inicioSemana === finSemana) {
        return res.status(400).json({ message: 'Se requiere un UID para buscar los macros semanales, o inicioSemana y finSemana son iguales' });
    }

    try {

        // Verificar si ya existe un documento macrosSemanal
        const macrosSemanal = await MacrosSemanal.findOne({ uid, fechaInicio:inicioSemana, fechaFin:finSemana});

        if (!macrosSemanal) {

            // Si no se encuentra, crea un nuevo documento de macrosSemanal
            const newMacrosSemanal = new MacrosSemanal({
                uid,
                objetivos: {
                    objetivo: { kcal: '0', Carbohidratos: '0', Grasas: '0', Proteinas: '0' },
                    totales: { kcal: '0', Carbohidratos: '0', Grasas: '0', Proteinas: '0' },
                    restantes: { kcal: '0', Carbohidratos: '0', Grasas: '0', Proteinas: '0' }
                },
                semana: {
                    lunes: { kcal: '0', Carbohidratos: '0', Grasas: '0', Proteinas: '0' },
                    martes: { kcal: '0', Carbohidratos: '0', Grasas: '0', Proteinas: '0' },
                    miercoles: { kcal: '0', Carbohidratos: '0', Grasas: '0', Proteinas: '0' },
                    jueves: { kcal: '0', Carbohidratos: '0', Grasas: '0', Proteinas: '0' },
                    viernes: { kcal: '0', Carbohidratos: '0', Grasas: '0', Proteinas: '0' },
                    sabado: { kcal: '0', Carbohidratos: '0', Grasas: '0', Proteinas: '0' },
                    domingo: { kcal: '0', Carbohidratos: '0', Grasas: '0', Proteinas: '0' }
                },
                nota: {
                    contenido: '0'
                },
                fechaInicio: inicioSemana,
                fechaFin: finSemana
            });

            // Guarda el nuevo documento en la base de datos
            macrosSemanal = await newMacrosSemanal.save();
        }

        // Envía una respuesta al cliente
        res.status(200).json(macrosSemanal);

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error al buscar o crear los macros semanales' });
    }
}


// Trae el documento por id y por fechas 
exports.getMacrosSemanalUno = async (req, res) => {
    const { uid, inicioSemana, finSemana } = req.params;
    try {
        // Verificar si ya existe un documento macrosSemanal
        const macrosSemanal = await MacrosSemanal.findOne({ uid, fechaInicio:inicioSemana, fechaFin:finSemana});
       
        // Envía una respuesta al cliente
        res.status(200).json(macrosSemanal);

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error al buscar o crear los macros semanales' });
    }
}


// Aplica objetivos a semana seleccionada
exports.putDatosObjetivoBoxSemanal = async (req, res) => {
    const { uid, inicioSemana, finSemana,} = req.params;
    const { kcal, carbohidratos, grasas, proteinas } = req.body;

  try{
    // Buscar el objetivo por uid
    let macrosSemanal = await MacrosSemanal.findOne({ uid, fechaInicio:inicioSemana, fechaFin:finSemana });

     // Si no se encuentra el objetivo, devolver un mensaje de error
     if (!macrosSemanal) {
        return res.status(404).json({ message: 'MacrosSemanal no encontrado' });
    }

     // Actualizar los campos del objetivo con los datos proporcionados
     macrosSemanal.objetivos.objetivo.kcal = kcal;
     macrosSemanal.objetivos.objetivo.Carbohidratos = carbohidratos;
     macrosSemanal.objetivos.objetivo.Grasas = grasas;
     macrosSemanal.objetivos.objetivo.Proteinas = proteinas;

     // Actualizar los campos del objetivo con los datos proporcionados
     macrosSemanal.semana.lunes.kcal = kcal;
     macrosSemanal.semana.lunes.Carbohidratos = carbohidratos;
     macrosSemanal.semana.lunes.Grasas = grasas;
     macrosSemanal.semana.lunes.Proteinas = proteinas;

     // Actualizar los campos del objetivo con los datos proporcionados
     macrosSemanal.semana.martes.kcal = kcal;
     macrosSemanal.semana.martes.Carbohidratos = carbohidratos;
     macrosSemanal.semana.martes.Grasas = grasas;
     macrosSemanal.semana.martes.Proteinas = proteinas;

     // Actualizar los campos del objetivo con los datos proporcionados
     macrosSemanal.semana.miercoles.kcal = kcal;
     macrosSemanal.semana.miercoles.Carbohidratos = carbohidratos;
     macrosSemanal.semana.miercoles.Grasas = grasas;
     macrosSemanal.semana.miercoles.Proteinas = proteinas;

     // Actualizar los campos del objetivo con los datos proporcionados
     macrosSemanal.semana.jueves.kcal = kcal;
     macrosSemanal.semana.jueves.Carbohidratos = carbohidratos;
     macrosSemanal.semana.jueves.Grasas = grasas;
     macrosSemanal.semana.jueves.Proteinas = proteinas;

     // Actualizar los campos del objetivo con los datos proporcionados
     macrosSemanal.semana.viernes.kcal = kcal;
     macrosSemanal.semana.viernes.Carbohidratos = carbohidratos;
     macrosSemanal.semana.viernes.Grasas = grasas;
     macrosSemanal.semana.viernes.Proteinas = proteinas;

     // Actualizar los campos del objetivo con los datos proporcionados
     macrosSemanal.semana.sabado.kcal = kcal;
     macrosSemanal.semana.sabado.Carbohidratos = carbohidratos;
     macrosSemanal.semana.sabado.Grasas = grasas;
     macrosSemanal.semana.sabado.Proteinas = proteinas;

     // Actualizar los campos del objetivo con los datos proporcionados
     macrosSemanal.semana.domingo.kcal = kcal;
     macrosSemanal.semana.domingo.Carbohidratos = carbohidratos;
     macrosSemanal.semana.domingo.Grasas = grasas;
     macrosSemanal.semana.domingo.Proteinas = proteinas;
     
    // Guardar el objetivo actualizado en la base de datos
    await macrosSemanal.save();

    // Devolver una respuesta con los datos actualizados
    res.status(200).json({ message: 'macrosSemanal actualizado correctamente', macrosSemanal });
  
  }catch(err) {
    // console.error('Error al actualizar el objetivo:', err);
    res.status(500).json({ message: 'Error al actualizar el macrosSemanal' });
  }

}

