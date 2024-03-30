const app = require('./app');
const connection = require('../db/conexion'); // Asegúrate de que la ruta sea correcta

const PORT = 5000;

// Verifica si la conexión a MongoDB ya está establecida
connection.once('open', () => {
    console.log('Conexión exitosa a MongoDB');
    app.listen(PORT, () => {
        console.log('Servidor escuchando en el puerto', PORT, '🚀');
    });
});

// Manejador de errores para la conexión
connection.on('error', (err) => {
    console.error('Error de conexión a MongoDB:', err);
    process.exit(1); // Termina el proceso con un código de error
});
