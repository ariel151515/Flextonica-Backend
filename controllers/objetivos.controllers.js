const Objetivo = require('../models/Objetivo');

exports.addPesoInicial = async (req, res) => {
    const { pesoInicial } = req.body;

    try{
        const newObjetivo = new Objetivo({ pesoInicial:pesoInicial });
        const saveObjetivo = await newObjetivo.save();

        console.log('Objetivo creado:', saveObjetivo);

        res.status(201).json({ saveObjetivo });

    }catch(err) {
        console.log(err);
        res.status(500).json({ message: 'Error al crear el objetivo' });
    }


};

