const { Router } = require("express");
const router = Router();

const ctrl = require('../controllers/macrosSemanal.controllers');

// Crea un documento de macrosSemanal
router.post('/macrosSemanal/:uid', ctrl.macrosSemanal);

// Trae un documento de macrosSemanal por uid y por fechas (las fechas las pasa por body)
router.post('/traemacrossemanal/:uid', ctrl.getMacrosSemanal);


module.exports = router;