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


// importaciones de las rutas
const userRoutes = require('../routes/user.routes.js');


// configuraciones de las rutas
app.use('/api', userRoutes);


module.exports = app;
