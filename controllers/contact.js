const path = require('path')

const rootDir = require('../util/path');

exports.getContacts = (req, res, next) => {
    res.sendFile(path.join(rootDir,'views', 'contact-us.html'));
};


exports.postContacts = (req, res, next) => {
    console.log('Submitted Data:', req.body);
    res.redirect('/contact-us/success');
};

exports.getSuccess = (req, res, next) => {
    res.send("Form successfuly filled")
};