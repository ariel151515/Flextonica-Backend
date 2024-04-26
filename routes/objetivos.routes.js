const { Router } = require("express");
// const { verifyToken } = require('../middlewares/index.js');
const router = Router();

const ctrl = require('../controllers/objetivos.controllers');

// Crea un documento de objetivos por usuario
router.post('/creaObjetivo/:uid', ctrl.creaObjetivo);

// Actualiza el documento de objetivo por usuario
router.put('/actualizaObjetivo/:uid', ctrl.actualizaObjetivo);

// Trae el objetivo por usuario
router.get('/traeObjetivoPorUsuario/:uid', ctrl.traeObjetivoPorUsuario);

module.exports = router;