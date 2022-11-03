//declare express from the library
const express = require ('express')
//call the express as a function
const app = express()

//set up the view engine
app.set('view engine', 'pug')

//sending response to the local host
app.get('/', (req, res) => {
    res.render('index')
})

//pass in port 3000
app.listen(3000)