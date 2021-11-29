const express = require('express');

const router = express.Router();

const AuthorController=require("../controllers/authorcontroller")
const BlogsController=require("../controllers/blogscontroller")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createAuthor',AuthorController.createAuthor)
router.post('/createBlogs',BlogsController.createBlogs)
router.get('/getBlogs',BlogsController.getBlogs)
router.delete('/DeleteBlogs/:deleteId',BlogsController.DeleteBlogs)

module.exports = router;