//Put all routes related to blog articles here
const express = require('express')
//create a router to render
const router = express.Router()

router.get('/new', (req, res) => {
    res.render('articles/newArticles')
})

router.post('/', (req, res) => {
    
})

//whenever we require this js file, we will read from this router.
module.exports = router