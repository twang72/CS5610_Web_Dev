//Put all routes related to blog articles here
const express = require('express');
//create a router to render
const router = express.Router();
const Article = require ('./../models/article')

router.get('/new', (req, res) => {
    res.render('articles/new', { article: new Article()})
})

router.get('/:id', async (req, res) => {
    const article = await Article.findById(req.params.id)
    if (article == null) res.redirect('/')
    //render the blog page that has just been created.
    res.render('articles/show', { article: article })
})

//save new blogs to mongodb
router.post('/', async (req, res) => {
    let article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    })
    try {
        //update our article with the new saved article
        article = await article.save()
        //if saved successfully, redirect to the article id.
        res.redirect(`/articles/${article.id}`)
    } catch (e) {
        res.render('articles/new', { article: article })
    }
    
})

//whenever we require this js file, we will read from this router.
module.exports = router;