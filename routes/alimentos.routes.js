const { Router } = require("express");
const router = Router();

const ctrl = require('../controllers/alimentos.controllers');

// Crea un alimento 
router.post('/creaalimento/', ctrl.creaAlimento);

// Elimina alimento
router.delete('/eliminaalimento/:uid/:alimentoId/', ctrl.eliminaAlimento);

// Edita alimento
router.put('/editaralimento/:uid/:alimentoId/', ctrl.editaAlimento);

// Trae todos los alimentos 
router.get('/alimentos/:uid', ctrl.getAlimentos);

// Trae alimento por id
router.get('/alimento/:userId/:alimentoId/', ctrl.getAlimento);


module.exports = router;