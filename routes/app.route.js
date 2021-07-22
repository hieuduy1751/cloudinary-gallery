const express = require('express');
const multer = require('multer');
const router = express.Router();
const upload = multer({
    dest: 'uploads',
    limits: {
        fileSize: 10240000
    }
});


const appController = require('../controllers/app.controller');

router.get('/', appController.home);

router.post('/upload', upload.single('upload'), appController.upload);

router.get('/delete/:id', appController.delete);

module.exports = router;