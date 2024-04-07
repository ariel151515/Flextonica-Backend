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
  const { uid } = req.params;
  const {
    pesoInicial,
    nivelDeActividad,
    edad,
    deficitCalorico,
    proteinas,
    carbohidratos,
    grasas,
    margen
  } = req.body;

  try{
    // Buscar el objetivo por uid
    let objetivo = await Objetivo.findOne({ uid });

     // Si no se encuentra el objetivo, devolver un mensaje de error
     if (!objetivo) {
        return res.status(404).json({ message: 'Objetivo no encontrado' });
    }

    // Actualizar los campos del objetivo con los datos proporcionados
    objetivo.pesoInicial = pesoInicial;
    objetivo.nivelDeActividad = nivelDeActividad;
    objetivo.edad = edad;
    objetivo.deficitCalorico = deficitCalorico;
    objetivo.proteinas = proteinas;
    objetivo.carbohidratos = carbohidratos;
    objetivo.grasas = grasas;
    objetivo.margen = margen;

    // Guardar el objetivo actualizado en la base de datos
    await objetivo.save();

  }catch(err) {
    console.error('Error al actualizar el objetivo:', err);
    res.status(500).json({ message: 'Error al actualizar el objetivo' });
  }
}
