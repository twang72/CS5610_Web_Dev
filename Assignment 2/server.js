//declare express from the library
const express = require ('express')
const articleRouter = require('./routes/articles')
//call the express as a function
const app = express()

//set up the view engine
app.set('view engine', 'ejs')

//every URLs that will start with /articles will be added to this router.
app.use('/articles', articleRouter)

//Pass all blog articles
app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdTime: new Date(),
        description: 'Test Description'
    }]
    res.render('articles/index', {articles: articles})
})

//render a 404 page for any undefined URLs.
app.get('*', (req, res) => {
    res.render('errorPage')
})

//pass in port 3000
app.listen(3000)