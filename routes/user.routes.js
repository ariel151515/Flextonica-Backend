const { Router } = require("express");
// const { verifyToken } = require('../middlewares/index.js');
const router = Router();

const ctrl = require('../controllers/user.controllers');

// Crea un usuario en mongo
router.post('/datauser/:uid', ctrl.createUserWithFirebaseUIDInMongo);

// Trae usuario por uid de Firebase
router.get('/datauser/:uid', ctrl.getUserByFirebaseUIDFromMongo);

// quedo obsoleta porque obtengo el estado de premium con el user.premium
// router.get('/datauser/premium/:uid', ctrl.getPremiumStatus);

module.exports = router;