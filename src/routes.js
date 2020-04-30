const express = require('express');
const UserCtrl = require('./controllers/UserCtrl');
const ProjectCtrl = require('./controllers/ProjectCtrl');

const router = express.Router();

router.get('/user', UserCtrl.index);
router.post('/user', UserCtrl.store);
router.put('/user/:id', UserCtrl.update);
router.delete('/user/:id', UserCtrl.delete);

router.get('/project', ProjectCtrl.index);
router.post('/project', ProjectCtrl.store);

module.exports = router;