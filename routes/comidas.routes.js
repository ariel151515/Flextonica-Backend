const { Router } = require("express");
const router = Router();

const ctrl = require('../controllers/comidas.controllers');

// Crea comidas
router.post('/creacomida/:uid/:fecha/', ctrl.creaComida);

// Delete comidas
router.delete('/deletecomida/:userId/:comidaId/', ctrl.deleteComida);

// Editar comidas
router.put('/editarcomida/:userId/:coleccionId/:comidaId/', ctrl.editarNombreComida);


module.exports = router;