const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const pkg = require('../package.json')

const app = express();

// Habilita CORS 
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
// app.use(express.json());

// Definir una ruta GET para la raíz "/"
app.get('/', (req, res) => {
    res.send({
        'author': pkg.name,
        'description': pkg.description,
        'version': pkg.version,
    });
  });

// Importaciones de las rutas
const userRoutes = require('../routes/user.routes.js');
const objetivoRoutes = require('../routes/objetivos.routes.js');
const macrosSemanalRoutes = require('../routes/macrosSemanal.routes.js');
const comidasRoutes = require('../routes/comidas.routes.js');
const alimentosRoutes = require('../routes/alimentos.routes.js');

// configuraciones de las rutas
app.use('/api', userRoutes);
app.use('/api', objetivoRoutes);
app.use('/api', macrosSemanalRoutes);
app.use('/api', comidasRoutes);
app.use('/api', alimentosRoutes);

module.exports = app;

