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
                objetivo: { kcal: '0', gramosCarbohidratos: '0', gramosGrasas: '0', gramosProteinas: '0' }, // Objetivo diario de macronutrientes
                totales: { kcal: '0', gramosCarbohidratos: '0', gramosGrasas: '0', gramosProteinas: '0' }, // Totales planeados para la semana
                restantes: { kcal: '0', gramosCarbohidratos: '0', gramosGrasas: '0', gramosProteinas: '0' } // Cantidad restante para alcanzar los objetivos
            },
            semana: {
                lunes: { kcal: '0', gramosCarbohidratos: '0', gramosGrasas: '0',gramosProteinas: '0', porcentajeCarbohidratos:'0', porcentajeGrasas:'0', porcentajeProteinas:'0' }, // Datos para el lunes
                martes: { kcal: '0', gramosCarbohidratos: '0', gramosGrasas: '0',gramosProteinas: '0', porcentajeCarbohidratos:'0', porcentajeGrasas:'0', porcentajeProteinas:'0' }, // Datos para el martes
                miercoles: { kcal: '0', gramosCarbohidratos: '0', gramosGrasas: '0',gramosProteinas: '0', porcentajeCarbohidratos:'0', porcentajeGrasas:'0', porcentajeProteinas:'0' }, // Datos para el miércoles
                jueves: { kcal: '0', gramosCarbohidratos: '0', gramosGrasas: '0',gramosProteinas: '0', porcentajeCarbohidratos:'0', porcentajeGrasas:'0', porcentajeProteinas:'0' }, // Datos para el jueves
                viernes: { kcal: '0', gramosCarbohidratos: '0', gramosGrasas: '0',gramosProteinas: '0', porcentajeCarbohidratos:'0', porcentajeGrasas:'0', porcentajeProteinas:'0' }, // Datos para el viernes
                sabado: { kcal: '0', gramosCarbohidratos: '0', gramosGrasas: '0',gramosProteinas: '0', porcentajeCarbohidratos:'0', porcentajeGrasas:'0', porcentajeProteinas:'0' }, // Datos para el sábado
                domingo: { kcal: '0', gramosCarbohidratos: '0', gramosGrasas: '0',gramosProteinas: '0', porcentajeCarbohidratos:'0', porcentajeGrasas:'0', porcentajeProteinas:'0' } // Datos para el domingo
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
                    objetivo: { kcal: '0', gramosCarbohidratos: '0', gramosGrasas: '0', gramosProteinas: '0' }, // Objetivo diario de macronutrientes
                    totales: { kcal: '0', gramosCarbohidratos: '0', gramosGrasas: '0', gramosProteinas: '0' }, // Totales planeados para la semana
                    restantes: { kcal: '0', gramosCarbohidratos: '0', gramosGrasas: '0', gramosProteinas: '0' } // Cantidad restante para alcanzar los objetivos
                },
                semana: {
                    lunes: { kcal: '0', gramosCarbohidratos: '0', gramosGrasas: '0',gramosProteinas: '0', porcentajeCarbohidratos:'0', porcentajeGrasas:'0', porcentajeProteinas:'0' }, // Datos para el lunes
                    martes: { kcal: '0', gramosCarbohidratos: '0', gramosGrasas: '0',gramosProteinas: '0', porcentajeCarbohidratos:'0', porcentajeGrasas:'0', porcentajeProteinas:'0' }, // Datos para el martes
                    miercoles: { kcal: '0', gramosCarbohidratos: '0', gramosGrasas: '0',gramosProteinas: '0', porcentajeCarbohidratos:'0', porcentajeGrasas:'0', porcentajeProteinas:'0' }, // Datos para el miércoles
                    jueves: { kcal: '0', gramosCarbohidratos: '0', gramosGrasas: '0',gramosProteinas: '0', porcentajeCarbohidratos:'0', porcentajeGrasas:'0', porcentajeProteinas:'0' }, // Datos para el jueves
                    viernes: { kcal: '0', gramosCarbohidratos: '0', gramosGrasas: '0',gramosProteinas: '0', porcentajeCarbohidratos:'0', porcentajeGrasas:'0', porcentajeProteinas:'0' }, // Datos para el viernes
                    sabado: { kcal: '0', gramosCarbohidratos: '0', gramosGrasas: '0',gramosProteinas: '0', porcentajeCarbohidratos:'0', porcentajeGrasas:'0', porcentajeProteinas:'0' }, // Datos para el sábado
                    domingo: { kcal: '0', gramosCarbohidratos: '0', gramosGrasas: '0',gramosProteinas: '0', porcentajeCarbohidratos:'0', porcentajeGrasas:'0', porcentajeProteinas:'0' } // Datos para el domingo
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
    const { 
        kcal, 
        gramosCarbohidratos, 
        gramosGrasas, 
        gramosProteinas,
        Proteinas, // %
        Carbohidratos, // %
        Grasas // %
    } = req.body;

  try{
    // Buscar el objetivo por uid
    let macrosSemanal = await MacrosSemanal.findOne({ uid, fechaInicio:inicioSemana, fechaFin:finSemana });

     // Si no se encuentra el objetivo, devolver un mensaje de error
     if (!macrosSemanal) {
        return res.status(404).json({ message: 'MacrosSemanal no encontrado' });
    }

     // Actualizar los campos del objetivo con los datos proporcionados
     macrosSemanal.objetivos.objetivo.kcal = kcal;
     macrosSemanal.objetivos.objetivo.gramosCarbohidratos = gramosCarbohidratos;
     macrosSemanal.objetivos.objetivo.gramosGrasas = gramosGrasas;
     macrosSemanal.objetivos.objetivo.gramosProteinas = gramosProteinas;

     // Actualizar los campos del objetivo con los datos proporcionados
     macrosSemanal.semana.lunes.kcal = kcal;
     macrosSemanal.semana.lunes.gramosCarbohidratos = gramosCarbohidratos;
     macrosSemanal.semana.lunes.gramosGrasas = gramosGrasas;
     macrosSemanal.semana.lunes.gramosProteinas = gramosProteinas;
     macrosSemanal.semana.lunes.porcentajeCarbohidratos = Carbohidratos;
     macrosSemanal.semana.lunes.porcentajeGrasas = Grasas;
     macrosSemanal.semana.lunes.porcentajeProteinas = Proteinas;


     // Actualizar los campos del objetivo con los datos proporcionados
     macrosSemanal.semana.martes.kcal = kcal;
     macrosSemanal.semana.martes.gramosCarbohidratos = gramosCarbohidratos;
     macrosSemanal.semana.martes.gramosGrasas = gramosGrasas;
     macrosSemanal.semana.martes.gramosProteinas = gramosProteinas;
     macrosSemanal.semana.martes.porcentajeCarbohidratos = Carbohidratos;
     macrosSemanal.semana.martes.porcentajeGrasas = Grasas;
     macrosSemanal.semana.martes.porcentajeProteinas = Proteinas;


     // Actualizar los campos del objetivo con los datos proporcionados
     macrosSemanal.semana.miercoles.kcal = kcal;
     macrosSemanal.semana.miercoles.gramosCarbohidratos = gramosCarbohidratos;
     macrosSemanal.semana.miercoles.gramosGrasas = gramosGrasas;
     macrosSemanal.semana.miercoles.gramosProteinas = gramosProteinas;
     macrosSemanal.semana.miercoles.porcentajeCarbohidratos = Carbohidratos;
     macrosSemanal.semana.miercoles.porcentajeGrasas = Grasas;
     macrosSemanal.semana.miercoles.porcentajeProteinas = Proteinas;


     // Actualizar los campos del objetivo con los datos proporcionados
     macrosSemanal.semana.jueves.kcal = kcal;
     macrosSemanal.semana.jueves.gramosCarbohidratos = gramosCarbohidratos;
     macrosSemanal.semana.jueves.gramosGrasas = gramosGrasas;
     macrosSemanal.semana.jueves.gramosProteinas = gramosProteinas;
     macrosSemanal.semana.jueves.porcentajeCarbohidratos = Carbohidratos;
     macrosSemanal.semana.jueves.porcentajeGrasas = Grasas;
     macrosSemanal.semana.jueves.porcentajeProteinas = Proteinas;


     // Actualizar los campos del objetivo con los datos proporcionados
     macrosSemanal.semana.viernes.kcal = kcal;
     macrosSemanal.semana.viernes.gramosCarbohidratos = gramosCarbohidratos;
     macrosSemanal.semana.viernes.gramosGrasas = gramosGrasas;
     macrosSemanal.semana.viernes.gramosProteinas = gramosProteinas;
     macrosSemanal.semana.viernes.porcentajeCarbohidratos = Carbohidratos;
     macrosSemanal.semana.viernes.porcentajeGrasas = Grasas;
     macrosSemanal.semana.viernes.porcentajeProteinas = Proteinas;


     // Actualizar los campos del objetivo con los datos proporcionados
     macrosSemanal.semana.sabado.kcal = kcal;
     macrosSemanal.semana.sabado.gramosCarbohidratos = gramosCarbohidratos;
     macrosSemanal.semana.sabado.gramosGrasas = gramosGrasas;
     macrosSemanal.semana.sabado.gramosProteinas = gramosProteinas;
     macrosSemanal.semana.sabado.porcentajeCarbohidratos = Carbohidratos;
     macrosSemanal.semana.sabado.porcentajeGrasas = Grasas;
     macrosSemanal.semana.sabado.porcentajeProteinas = Proteinas;


     // Actualizar los campos del objetivo con los datos proporcionados
     macrosSemanal.semana.domingo.kcal = kcal;
     macrosSemanal.semana.domingo.gramosCarbohidratos = gramosCarbohidratos;
     macrosSemanal.semana.domingo.gramosGrasas = gramosGrasas;
     macrosSemanal.semana.domingo.gramosProteinas = gramosProteinas;
     macrosSemanal.semana.domingo.porcentajeCarbohidratos = Carbohidratos;
     macrosSemanal.semana.domingo.porcentajeGrasas = Grasas;
     macrosSemanal.semana.domingo.porcentajeProteinas = Proteinas;


    // Guardar el objetivo actualizado en la base de datos
    await macrosSemanal.save();

    // Devolver una respuesta con los datos actualizados
    res.status(200).json({ message: 'macrosSemanal actualizado correctamente', macrosSemanal });
  
  }catch(err) {
    // console.error('Error al actualizar el objetivo:', err);
    res.status(500).json({ message: 'Error al actualizar el macrosSemanal' });
  }

}


// Actualiza los datos de los dias de la semana (macros en gramos y %, tambien calorias)
exports.actualizaDatosEnPorcentajesEnElDiaDeLaSemana = async (req, res) => {
    const { uid, fechaInicio, fechaFin } = req.params;
    const { 
        kcal,
        gramosCarbohidratos,
        gramosGrasas,
        gramosProteinas,
        porcentajeCarbohidratos,
        porcentajeGrasas,
        porcentajeProteinas,
        dia
    } = req.body;

    try{
        // Buscar el objetivo por uid
        let macrosSemanal = await MacrosSemanal.findOne({ uid, fechaInicio:fechaInicio, fechaFin:fechaFin });
    
         // Si no se encuentra el objetivo, devolver un mensaje de error
         if (!macrosSemanal) {
            return res.status(404).json({ message: 'MacrosSemanal no encontrado' });
        }
    

        if(dia === 'Lunes'){
            // Actualizar los campos del objetivo con los datos proporcionados
            macrosSemanal.semana.lunes.kcal = kcal;
            macrosSemanal.semana.lunes.gramosCarbohidratos = gramosCarbohidratos;
            macrosSemanal.semana.lunes.gramosGrasas = gramosGrasas;
            macrosSemanal.semana.lunes.gramosProteinas = gramosProteinas;
        
            macrosSemanal.semana.lunes.porcentajeCarbohidratos =  porcentajeCarbohidratos;
            macrosSemanal.semana.lunes.porcentajeGrasas = porcentajeGrasas;
            macrosSemanal.semana.lunes.porcentajeProteinas = porcentajeProteinas;
        }

        if(dia === 'Martes'){
            // Actualizar los campos del objetivo con los datos proporcionados
            macrosSemanal.semana.martes.kcal = kcal;
            macrosSemanal.semana.martes.gramosCarbohidratos = gramosCarbohidratos;
            macrosSemanal.semana.martes.gramosGrasas = gramosGrasas;
            macrosSemanal.semana.martes.gramosProteinas = gramosProteinas;
        
            macrosSemanal.semana.martes.porcentajeCarbohidratos =  porcentajeCarbohidratos;
            macrosSemanal.semana.martes.porcentajeGrasas = porcentajeGrasas;
            macrosSemanal.semana.martes.porcentajeProteinas = porcentajeProteinas;
        }

        if(dia === 'Miercoles'){
            // Actualizar los campos del objetivo con los datos proporcionados
            macrosSemanal.semana.miercoles.kcal = kcal;
            macrosSemanal.semana.miercoles.gramosCarbohidratos = gramosCarbohidratos;
            macrosSemanal.semana.miercoles.gramosGrasas = gramosGrasas;
            macrosSemanal.semana.miercoles.gramosProteinas = gramosProteinas;
        
            macrosSemanal.semana.miercoles.porcentajeCarbohidratos =  porcentajeCarbohidratos;
            macrosSemanal.semana.miercoles.porcentajeGrasas = porcentajeGrasas;
            macrosSemanal.semana.miercoles.porcentajeProteinas = porcentajeProteinas;
        }

        if(dia === 'Jueves'){
            // Actualizar los campos del objetivo con los datos proporcionados
            macrosSemanal.semana.jueves.kcal = kcal;
            macrosSemanal.semana.jueves.gramosCarbohidratos = gramosCarbohidratos;
            macrosSemanal.semana.jueves.gramosGrasas = gramosGrasas;
            macrosSemanal.semana.jueves.gramosProteinas = gramosProteinas;
        
            macrosSemanal.semana.jueves.porcentajeCarbohidratos =  porcentajeCarbohidratos;
            macrosSemanal.semana.jueves.porcentajeGrasas = porcentajeGrasas;
            macrosSemanal.semana.jueves.porcentajeProteinas = porcentajeProteinas;
        }

        if(dia === 'Viernes'){
            // Actualizar los campos del objetivo con los datos proporcionados
            macrosSemanal.semana.viernes.kcal = kcal;
            macrosSemanal.semana.viernes.gramosCarbohidratos = gramosCarbohidratos;
            macrosSemanal.semana.viernes.gramosGrasas = gramosGrasas;
            macrosSemanal.semana.viernes.gramosProteinas = gramosProteinas;
        
            macrosSemanal.semana.viernes.porcentajeCarbohidratos =  porcentajeCarbohidratos;
            macrosSemanal.semana.viernes.porcentajeGrasas = porcentajeGrasas;
            macrosSemanal.semana.viernes.porcentajeProteinas = porcentajeProteinas;
        }

        if(dia === 'Sabado'){
            // Actualizar los campos del objetivo con los datos proporcionados
            macrosSemanal.semana.sabado.kcal = kcal;
            macrosSemanal.semana.sabado.gramosCarbohidratos = gramosCarbohidratos;
            macrosSemanal.semana.sabado.gramosGrasas = gramosGrasas;
            macrosSemanal.semana.sabado.gramosProteinas = gramosProteinas;
        
            macrosSemanal.semana.sabado.porcentajeCarbohidratos =  porcentajeCarbohidratos;
            macrosSemanal.semana.sabado.porcentajeGrasas = porcentajeGrasas;
            macrosSemanal.semana.sabado.porcentajeProteinas = porcentajeProteinas;
        }

        if(dia === 'Domingo'){
            // Actualizar los campos del objetivo con los datos proporcionados
            macrosSemanal.semana.domingo.kcal = kcal;
            macrosSemanal.semana.domingo.gramosCarbohidratos = gramosCarbohidratos;
            macrosSemanal.semana.domingo.gramosGrasas = gramosGrasas;
            macrosSemanal.semana.domingo.gramosProteinas = gramosProteinas;
        
            macrosSemanal.semana.domingo.porcentajeCarbohidratos =  porcentajeCarbohidratos;
            macrosSemanal.semana.domingo.porcentajeGrasas = porcentajeGrasas;
            macrosSemanal.semana.domingo.porcentajeProteinas = porcentajeProteinas;
        }

        // Guardar el objetivo actualizado en la base de datos
        await macrosSemanal.save();
    
        // Devolver una respuesta con los datos actualizados
        res.status(200).json({ message: 'macrosSemanal actualizado correctamente', macrosSemanal });
      
      }catch(err) {
        // console.error('Error al actualizar el objetivo:', err);
        res.status(500).json({ message: 'Error al actualizar el macrosSemanal' });
      }
}



// Actualiza nota semanal
exports.putNotaSemanal = async (req, res) => {
    const { uid, fechaInicio, fechaFin} = req.params;
    const { nota } = req.body;

  try{
    // Buscar el objetivo por uid
    let macrosSemanal = await MacrosSemanal.findOne({ uid, fechaInicio, fechaFin });

     // Si no se encuentra el objetivo, devolver un mensaje de error
     if (!macrosSemanal) {
        console.log(uid, inicioSemana, finSemana)
        return res.status(404).json({ message: 'No se pudo actualizar la nota, MacrosSemanal no encontrado', macrosSemanal });
    }


     // Actualizar los campos del objetivo con los datos proporcionados
     macrosSemanal.nota.contenido = nota
   

    // Guardar el objetivo actualizado en la base de datos
    await macrosSemanal.save();

    // Devolver una respuesta con los datos actualizados
    res.status(200).json({ message: 'macrosSemanal actualizado correctamente', macrosSemanal});
  
  }catch(err) {
    // console.error('Error al actualizar el objetivo:', err);
    res.status(500).json({ message: 'Error al actualizar el macrosSemanal' });
  }

}


// Actualiza la fecha en el documento semanal
exports.actualizafechaactualenlasemana = async (req, res) => {
    const { uid, fechaInicio, fechaFin} = req.params;
    const { fechasSemana } = req.body;

  try{
    // Buscar el objetivo por uid
    let macrosSemanal = await MacrosSemanal.findOne({ uid, fechaInicio, fechaFin });

     // Si no se encuentra el objetivo, devolver un mensaje de error
     if (!macrosSemanal) {

        return res.status(404).json({ message: 'No se pudo actualizar la nota, MacrosSemanal no encontrado', macrosSemanal });
    }


    // ------------------------------------------
     macrosSemanal.nota.contenido = fechaActual
     

    // ------------------------------------------


    // Guardar el objetivo actualizado en la base de datos
    await macrosSemanal.save();

    // Devolver una respuesta con los datos actualizados
    res.status(200).json({ message: 'macrosSemanal actualizado correctamente', macrosSemanal});
  
  }catch(err) {
    // console.error('Error al actualizar el objetivo:', err);
    res.status(500).json({ message: 'Error al actualizar el macrosSemanal' });
  }

}