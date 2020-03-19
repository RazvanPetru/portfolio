const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/resume', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/resume.pdf'));
})

module.exports = router;