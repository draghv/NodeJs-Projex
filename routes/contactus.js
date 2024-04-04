const path = require('path')
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir,'views', 'contact-us.html'));
});

router.post('/', (req, res, next) => {
    console.log('Submitted Data:', req.body);
    res.redirect('/contact-us/success');
});

router.get('/success', (req, res, next) => {
    res.send("Form successfuly filled")
});

module.exports = router;