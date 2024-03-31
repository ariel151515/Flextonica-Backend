const Objetivo = require('../models/Objetivo');

exports.addObjetivo = async (req, res) => {
    const { uid,
            nivelDeActividad,
            edad,
            deficitCalorico,
            proteinas,
            carbohidratos,
            grasas,
            margen,
            tmb,
            caloriasAConsumir
        } = req.body;

    try{
        const newObjetivo = new Objetivo({
                    uid,
                    nivelDeActividad,
                    edad,
                    deficitCalorico,
                    proteinas,
                    carbohidratos,
                    grasas,
                    margen,
                    tmb,
                    caloriasAConsumir
            });

        const saveObjetivo = await newObjetivo.save();
        console.log('Objetivo creado:', saveObjetivo);
        res.status(201).json({ saveObjetivo });

    }catch(err) {
        console.log(err);
        res.status(500).json({ message: 'Error al crear el objetivo' });
    }


};

