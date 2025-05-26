const express = require('express');
const router = express.Router();
const authControllers = require('./../controllers/authControllers');
const clients = require('./../controllers/client/clientControllers');

router.post('/register', authControllers.registerUser);
router.post('/login', authControllers.loginUser);

router.get('/home', clients.getHome)
router.get('/about', clients.getAbout)
router.get('/program', clients.getPrograms)
router.get('/berita', clients.getBerita)
router.get('/jurnal', clients.getJurnal)
router.get('/riset', clients.getResearch)

module.exports = router;
