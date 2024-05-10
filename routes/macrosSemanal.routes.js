const { Router } = require("express");
const router = Router();

const ctrl = require('../controllers/macrosSemanal.controllers');

// Crea un documento de macrosSemanal al inicio o login
router.post('/macrosSemanal/:uid', ctrl.macrosSemanal);

// Trae un documento de macrosSemanal por uid y por fechas al dar click en 
// siguiente semana y si no existe lo crea
router.get('/macrossemanal/:uid/:inicioSemana/:finSemana/', ctrl.getMacrosSemanal);


// Trae un documento de macrosSemanal por uid y por fechas al dar click en siguiente semana
router.get('/macrossemanaluno/:uid/:inicioSemana/:finSemana/', ctrl.getMacrosSemanalUno);

// Trae un documento de macrosSemanal por uid y por fechas
//router.post('/macrossemanal/getocrea/:uid', ctrl.geAndCreatetMacrosSemanal);

module.exports = router;