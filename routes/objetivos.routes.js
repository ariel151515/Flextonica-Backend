const { Router } = require("express");
// const { verifyToken } = require('../middlewares/index.js');
const router = Router();

const ctrl = require('../controllers/objetivos.controllers');

// Crea un documento de onjetivos
router.post('/creaObjetivo/:uid', ctrl.creaObjetivo);

// Actualiza el documento objetivo
router.put('/actualizaObjetivo/:uid', ctrl.actualizaObjetivo);

// Trae el objetivo por usuario
router.get('/traeObjetivoPorUsuario/:uid', ctrl.traeObjetivoPorUsuario);

module.exports = router;