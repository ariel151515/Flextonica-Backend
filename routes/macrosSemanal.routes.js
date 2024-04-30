const { Router } = require("express");
const router = Router();

const ctrl = require('../controllers/macrosSemanal.controllers');

// Crea un documento de macrosSemanal
router.post('/macrosSemanal/:uid', ctrl.macrosSemanal);

// Trae un documento de macrosSemanal por uid y por fechas
router.get('/macrossemanal/:uid/:inicioSemana/:finSemana', ctrl.getMacrosSemanal);


module.exports = router;