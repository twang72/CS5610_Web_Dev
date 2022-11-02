const express = require("express");
const router = express.Router();
const axios = require('axios');
const{addToDB} = require('../db');
const path = require("path");

 
router.get('/newtask', function (req, res){
  res.sendFile(path.join(__dirname, "../public", 'newtask.html'))
});
router.get("/", async function(req, res){
  try{
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/");
    res.status(response.status).json(response.data);
  } catch (err) {
    console.log(err);
  }
})
  /* axios
  .get("https://jsonplaceholder.typicode.com/todos/")
  .then((response) =>{
    res.status(response.status).json(response.data);
  })
  .catch((err) => {
    console.log(err);
  });
}); */

router.get("/:taskId", async function(req, res){
  try{
    // const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${req.params.taskId}`);
    // res.render('task', {id: response.data.id, title: response.data.title});
  } catch (err) {
    console.log(err);
  }
  /* console.log(req.params);
  axios
  .get('https://jsonplaceholder.typicode.com/todos/${req.params.taskId}')
  .then((response) =>{
    res.render('task', {id: response.data.id, title: response.data.title});
  })
  .catch((err) => {
    console.log(err);
  }); */
});

router.post('/', async function (req, res){
  try{
    await addToDB(req.body);
    res.redirect('/api/tasks');
  }catch (err) {
    console.log(err);
  }
})

module.exports = router;