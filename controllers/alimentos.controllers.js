const Alimento = require('../models/Alimento');


// Crea obj de alimento
exports.creaAlimento = async (req, res) => {
    try {
        const { 
            uid,
            marca,
            descripcion,
            porcionEnGramos,
            calorias,
            proteinas,
            carbohidratos,
            grasas,
            caloriasPorGramo,
            proteinasPorGramo,
            carbohidratosPorGramo,
            grasasPorGramo,
            saludable
        } = req.body;


        // Crea un nuevo usuario con el uid proporcionado por Firebase
       const newAlimento = new Alimento({
            uid:uid,
            marca:marca,
            descripcion:descripcion,
            porcionEnGramos:porcionEnGramos,
            calorias:calorias,
            proteinas:proteinas,
            carbohidratos:carbohidratos,
            grasas:grasas,
            caloriasPorGramo:caloriasPorGramo,
            proteinasPorGramo:proteinasPorGramo,
            carbohidratosPorGramo:carbohidratosPorGramo,
            grasasPorGramo:grasasPorGramo,
            saludable:saludable
        });

        // Guarda el nuevo usuario en la base de datos
        const saveAlimento = await newAlimento.save();

        // Responde con el usuario recién creado
        res.status(201).json({ message:'¡Alimento creado con exito!', saveAlimento });

    } catch (err) {
        console.error('Error al crear alimento', err);
        res.status(500).json({ message: 'Error al crear alimento' });
    }
}


// Elimina un alimento por _id y uid
exports.eliminaAlimento = async (req, res) => {
    try {
        const { uid, alimentoId } = req.params;

        // Busca y elimina el alimento por _id y uid
        const deletedAlimento = await Alimento.findOneAndDelete({ uid, _id:alimentoId});

        if (!deletedAlimento) {
            return res.status(404).json({ message: 'Alimento no encontrado' });
        }

        // Responde con el alimento eliminado
        res.status(200).json({ message: '¡Alimento eliminado con éxito!', deletedAlimento });

    } catch (err) {
        console.error('Error al eliminar alimento', err);
        res.status(500).json({ message: 'Error al eliminar alimento' });
    }
}


// Edita obj de alimento
// Edita un alimento por _id y uid
exports.editaAlimento = async (req, res) => {
    try {
        const { uid, alimentoId } = req.params;
        const { 
            marca,
            descripcion,
            porcionEnGramos,
            calorias,
            proteinas,
            carbohidratos,
            grasas,
            caloriasPorGramo,
            proteinasPorGramo,
            carbohidratosPorGramo,
            grasasPorGramo,
            saludable
        } = req.body;

        // Busca y actualiza el alimento por _id y uid
        const updatedAlimento = await Alimento.findOneAndUpdate(
            { uid, _id: alimentoId },
            { 
                marca,
                descripcion,
                porcionEnGramos,
                calorias,
                proteinas,
                carbohidratos,
                grasas,
                caloriasPorGramo,
                proteinasPorGramo,
                carbohidratosPorGramo,
                grasasPorGramo,
                saludable
            },
            { new: true } // Devuelve el documento después de la actualización
        );

        if (!updatedAlimento) {
            return res.status(404).json({ message: 'Alimento no encontrado' });
        }

        // Responde con el alimento actualizado
        res.status(200).json({ message: '¡Alimento actualizado con éxito!', updatedAlimento });

    } catch (err) {
        console.error('Error al editar alimento', err);
        res.status(500).json({ message: 'Error al editar alimento' });
    }
}