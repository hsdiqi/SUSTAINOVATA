const express = require('express');
const router = express.Router();

const clientRoutes = require('./clientRoutes');
const adminRoutes = require('./adminRoutes');
const uploads = require('./uploadFile');
const images = require('./images');

router.use('/clients', clientRoutes); 
router.use('/admin', adminRoutes); 
router.use('/uploads', uploads);
router.use('/images', images);

module.exports = router;