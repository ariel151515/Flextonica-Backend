const { Router } = require("express");
const router = Router();

const ctrl = require('../controllers/alimentos.controllers');

// Crea comidas
router.post('/creaalimento/', ctrl.creaAlimento);

// Delete comidas
router.delete('/eliminaalimento/:uid/:alimentoId/', ctrl.eliminaAlimento);

// Editar comidas
router.put('/editaralimento/:uid/:alimentoId/', ctrl.editaAlimento);


module.exports = router;