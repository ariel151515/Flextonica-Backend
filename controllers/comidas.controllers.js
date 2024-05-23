const MacrosSemanal = require('../models/MacrosSemanal');


// Crea obj de comida 
exports.creaComida = async (req, res) => {
    try {
        const { uid, fecha } = req.params;
        const { nombre } = req.body;

        // Realiza la búsqueda en la colección adecuada
        const result = await MacrosSemanal.findOne({
            uid: uid,
            $or: [
                { "semana.lunes.fecha": fecha },
                { "semana.martes.fecha": fecha },
                { "semana.miercoles.fecha": fecha },
                { "semana.jueves.fecha": fecha },
                { "semana.viernes.fecha": fecha },
                { "semana.sabado.fecha": fecha },
                { "semana.domingo.fecha": fecha }
            ]
        });

        // Buscar el día que coincide con la fecha proporcionada
        let diaEncontrado = null;

        // Iterar sobre los días de la semana
        for (const dia of ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']) {
            // Verificar si el día coincide con la fecha
            if (result.semana[dia].fecha === fecha) {
                diaEncontrado = result.semana[dia];
                break; // Una vez encontrado el día, salir del bucle
            }
        }

        if (diaEncontrado) {
            // Agregar el objeto de comida al array de comidas del día encontrado
            diaEncontrado.comidas.push({
                Nombre: nombre,
                Alimentos: [] // Aquí puedes añadir más propiedades si es necesario
            });
             
            console.log("Día después de agregar comida:", diaEncontrado);

            // Guardar los cambios en la base de datos
            await result.save();

            res.status(200).json(diaEncontrado); // Devuelve el día actualizado con la nueva comida agregada
        } else {
            res.status(404).json({ message: 'No se encontraron datos para la fecha proporcionada.' });
        }
    } catch (err) {
        console.error('Error al buscar el documento por fecha:', err);
        res.status(500).json({ message: 'Error al buscar el documento por fecha.' });
    }
};


// Delete obj de comida 
exports.deleteComida = async (req, res) => {
    try {
        const { userId, coleccionId, comidaId } = req.params;

        // Encuentra y elimina la comida del documento apropiado en la colección
        const resultado = await MacrosSemanal.findOneAndUpdate(
            { uid: userId, _id: coleccionId },
            { $pull: { "semana.lunes.comidas": { _id: comidaId } } },
            { new: true } // Esto garantiza que devolvamos el documento actualizado
        );

     return res.status(200).json({ message: 'Comida eliminada correctamente.'});

    } catch (error) {
        console.error('Error al eliminar la comida:', error);
        res.status(500).json({ message: 'Error al eliminar la comida. Detalles: ' + error.message });
    }
};



