const User = require('../models/User');


// Endpoint POST para crea un usuario en mongo con el UID de Firebase
exports.createUserWithFirebaseUIDInMongo = async (req, res) => {
    const { uid } = req.params;

    try {
       // Crea un nuevo usuario con el uid proporcionado por Firebase
       const newUser = new User({
        uid: uid
    });

    // Guarda el nuevo usuario en la base de datos
    const savedUser = await newUser.save();

    // Responde con el usuario recién creado
    res.status(201).json({ user: savedUser });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error al crear el usuario' });
    }
};


// Endpoint GET para obtener un usuario por su UID
exports.getUserByFirebaseUIDFromMongo = async (req, res) => {
    const { uid } = req.params;

    try {
        // Convierte uid a string
        const uidString = uid.toString();

        // Busca el usuario en la base de datos por su UID
        const user = await User.findOne({ uid: uidString });

        // Si el usuario existe, responde con el usuario encontrado
        if (user) {
            res.status(200).json({ user });
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error al obtener el usuario' });
    }
};
