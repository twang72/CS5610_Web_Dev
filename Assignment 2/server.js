//declare express from the library
const express = require ('express');
const mongoose = require ('mongoose');
const Article = require('./models/article')
require('dotenv').config()
const uri = process.env.mongodb_uri
const articleRouter = require('./routes/articles');
//import tthe method-override
const methodOverride= require('method-override')
//call the express as a function
const app = express();

//pass in port 3000
app.listen(3000, () =>{
    console.log('server running on port 3000.')
})

//connect to mongodb through mongoose
mongoose.connect(uri)
.then(() => console.log('MongoDB connection established.'))
.catch((error) => console.error('Mongodb connection failed:', error.message))


//set up the view engine
app.set('view engine', 'ejs')

//tell express to access to the form
app.use(express.urlencoded({extended: false}))

//tell express to use method-override
app.use(methodOverride('_method'))

//Pass all blog articles
app.get('/', async (req, res) => {
    //Every time we get back to the homepage, the latest blog will come first in the list.
    const articles = await Article.find().sort( {createdTime: 'desc'})
    res.render('articles/index', {articles: articles})
})


//every URLs that will start with /articles will be added to this router.
app.use('/articles', articleRouter)

//render a 404 page for any undefined URLs.
app.get('*', (req, res) => {
    res.render('errorPage')
})

