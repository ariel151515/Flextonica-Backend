const { Router } = require("express");
// const { verifyToken } = require('../middlewares/index.js');
const router = Router();

const ctrl = require('../controllers/user.controllers');

router.post('/datauser/:uid', ctrl.createUserWithFirebaseUIDInMongo);
router.get('/datauser/:uid', ctrl.getUserByFirebaseUIDFromMongo);

module.exports = router;