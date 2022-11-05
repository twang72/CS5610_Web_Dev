//declare express from the library
const express = require ('express');
const mongoose = require ('mongoose');
require('dotenv').config()
const uri = process.env.mongodb_uri
const articleRouter = require('./routes/articles');
//call the express as a function
const app = express();


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
app.listen(3000, () =>{
    console.log('server running on port 3000.')
})

mongoose.connect(uri)
.then(() => console.log('MongoDB connection established.'))
.catch((error) => console.error('Mongodb connection failed:', error.message))