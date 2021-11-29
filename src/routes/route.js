const express = require('express');

const router = express.Router();

const AuthorController=require("../controllers/authorcontroller")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createAuthor',AuthorController.createAuthor)

module.exports = router;