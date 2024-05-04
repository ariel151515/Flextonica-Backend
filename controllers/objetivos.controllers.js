const Objetivo = require('../models/Objetivo');

// Crea un bjetivo x usuario
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
                edad: '40',
                pesoInicial: '70',
                nivelDeActividad: 'Ejercicio moderado (3-5 d/sem)',
                balanceEnergetico: 'Deficit calorico',
                porcentaje: '10',
                proteinas: '25', // Asegúrate de obtener este valor si es necesario
                carbohidratos: '25', // Asegúrate de obtener este valor si es necesario
                grasas: '50', // Asegúrate de obtener este valor si es necesario
                margen: '5', // Asegúrate de obtener este valor si es necesario
                
                caloriasaconsumirtmb: '1000',
                gramosProteinas: '100',
                gramosCarbohidratos: '100',
                gramosGrasas: '100',
            });
            
            const saveObjetivo = await newObjetivo.save();
            //console.log('Objetivo creado:', saveObjetivo);

            res.status(201).json({ saveObjetivo });
        
    }catch(err) {
        //console.log(err);
        res.status(500).json({ message: 'Error al crear el objetivo' });
    }

};


// Actualiza el objetovo
exports.actualizaObjetivo = async (req, res) => {
  const { uid } = req.params;
  const {
    edad,
    pesoInicial,
    nivelDeActividad,
    balanceEnergetico,
    porcentaje,
    proteinas, 
    carbohidratos, 
    grasas, 
    margen, 
    caloriasaconsumirtmb,
    gramosProteinas,
    gramosCarbohidratos,
    gramosGrasas,
  } = req.body;

  try{
    // Buscar el objetivo por uid
    let objetivo = await Objetivo.findOne({ uid });

     // Si no se encuentra el objetivo, devolver un mensaje de error
     if (!objetivo) {
        return res.status(404).json({ message: 'Objetivo no encontrado' });
    }

     // Actualizar los campos del objetivo con los datos proporcionados
     objetivo.edad = edad;
     objetivo.pesoInicial = pesoInicial;
     objetivo.nivelDeActividad = nivelDeActividad;
     objetivo.balanceEnergetico = balanceEnergetico;
     objetivo.porcentaje = porcentaje;
     objetivo.proteinas = proteinas;
     objetivo.carbohidratos = carbohidratos;
     objetivo.grasas = grasas;
     objetivo.margen = margen;
     objetivo.caloriasaconsumirtmb = caloriasaconsumirtmb,
     objetivo.gramosProteinas = gramosProteinas,
     objetivo.gramosCarbohidratos = gramosCarbohidratos,
     objetivo.gramosGrasas = gramosGrasas,

     
    // Guardar el objetivo actualizado en la base de datos
    await objetivo.save();

    // Devolver una respuesta con los datos actualizados
    res.status(200).json({ message: 'Objetivo actualizado correctamente', objetivo });
  
  }catch(err) {
    // console.error('Error al actualizar el objetivo:', err);
    res.status(500).json({ message: 'Error al actualizar el objetivo' });
  }

}


// Trae el objetivo por usuario
exports.traeObjetivoPorUsuario = async (req, res) => {
  const { uid } = req.params;
  
  try {
    let objetivo = await Objetivo.findOne({ uid });

    // Si no se encuentra el objetivo, devolver un mensaje de error
    if (!objetivo) {
        return res.status(404).json({ message: 'Objetivo no encontrado' });
    }

     // Devolver una respuesta con los datos actualizados
     res.status(200).json({ message: 'Objetivo encontrado', objetivo });

  }catch (err) {
    // console.log(err);
    res.status(500).json({ message: 'Error al obtener el objetivo' });
  }
}

