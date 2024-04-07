const Objetivo = require('../models/Objetivo');

exports.creaObjetivo = async (req, res) => {
    const { uid } = req.params;

    try{

         // Verificar si ya existe un objetivo con el mismo UID
         const objetivoExistente = await Objetivo.findOne({ uid });

         if (objetivoExistente) {
             console.log('Ya existe un objetivo para este usuario');
             return res.status(400).json({ message: 'Ya existe un objetivo para este usuario' });
         }

           // Convertir UID a string
            const uidString = uid.toString();

            const newObjetivo = new Objetivo({ 
                uid:uidString,
                nivelDeActividad:'0', 
                edad:'0',
                deficitCalorico:'0', 
                proteinas:'0',
                carbohidratos:'0',
                grasas:'0',
                margen:'0', 
                tmb:'0',
                caloriasAConsumir:'0', 
                pesoInicial:'0'
            });
            
            const saveObjetivo = await newObjetivo.save();
            console.log('Objetivo creado:', saveObjetivo);

            res.status(201).json({ saveObjetivo });
        
    }catch(err) {
        console.log(err);
        res.status(500).json({ message: 'Error al crear el objetivo' });
    }

};

// Actualiza el objetovo
exports.actualizaObjetivo = async (req, res) => {

}
