//Put all routes related to blog articles here
const express = require('express');
const Article = require ('./../models/article')
//create a router to render
const router = express.Router();


router.get('/new', (req, res) => {
    res.render('articles/new', { article: new Article()})
})

router.get('/edit/:id', async (req, res) => {
    const article = await Article.findById(req.params.id)
    res.render('articles/edit', { article: article })
})

router.get('/:slug', async (req, res) => {
    const article = await Article.findOne({ slug: req.params.slug })
    if (article == null) res.redirect('/')
    //render the blog page that has just been created.
    res.render('articles/show', { article: article })
})

//save new blogs to mongodb
router.post('/', async (req, res, next) => {
    req.article = new Article()
    next()
}, saveArticleAndRedirect('new'))

router.put('/:id', async (req, res, next) => {
    req.article = await Article.findById(req.params.id)
    next()
}, saveArticleAndRedirect('edit'))

router.delete('/:id', async (req, res) => {
    await Article.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

function saveArticleAndRedirect(path) {
    return async (req, res) => {
        let article = req.article
        article.title = req.body.title
        article.description = req.body.description
        article.markdown = req.body.markdown
    
        try {
            //update our article with the new saved article
            article = await article.save()
            //if saved successfully, redirect to the article id.
            res.redirect(`/articles/${article.slug}`)
        } catch (e) {
            res.render(`articles/${path}`, { article: article })
        }
    }
}

//whenever we require this js file, we will read from this router.
module.exports = router