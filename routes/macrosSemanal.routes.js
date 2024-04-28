const { Router } = require("express");
const router = Router();

const ctrl = require('../controllers/macrosSemanal.controllers');

// Crea un documento de objetivos por usuario
router.post('/macrosSemanal/:uid', ctrl.macrosSemanal);

module.exports = router;