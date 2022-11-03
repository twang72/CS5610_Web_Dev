//Put all routes related to blog articles here
const express = require('express')
//create a router to render
const router = express.Router()
//whenever we require this js file, we will read from this router.
module.exports = router

router.get('/', (req, res) => {
    res.send('You are in blog article page.')
})