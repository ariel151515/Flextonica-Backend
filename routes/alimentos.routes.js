const { Router } = require("express");
const router = Router();

const ctrl = require('../controllers/alimentos.controllers');

router.post('/creaalimento/', ctrl.creaAlimento);

router.delete('/eliminaalimento/:uid/:alimentoId/', ctrl.eliminaAlimento);

router.put('/editaralimento/:uid/:alimentoId/', ctrl.editaAlimento);

router.get('/alimentos/:uid', ctrl.getAlimentos);

module.exports = router;