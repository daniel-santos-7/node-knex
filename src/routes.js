const express = require('express');
const UserCtrl = require('./controllers/UserCtrl');

const router = express.Router();

router.get('/user', UserCtrl.index);
router.post('/user', UserCtrl.store);
router.put('/user/:id', UserCtrl.update);
router.delete('/user/:id', UserCtrl.delete);

module.exports = router;