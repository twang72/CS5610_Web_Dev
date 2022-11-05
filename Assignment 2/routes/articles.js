//Put all routes related to blog articles here
const express = require('express');
//create a router to render
const router = express.Router();

router.get('/new', (req, res) => {
    res.render('articles/newArticles')
})

//save new blogs to mongodb


//whenever we require this js file, we will read from this router.
module.exports = router;