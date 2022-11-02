const { MongoClient } = require('mongodb');
require('dotenv').config();
// console.log(process.env)
const uri = process.env.mongodb_uri;
const client = new MongoClient(uri);

module.exports = {
    connectToDB:
        async function () {
            try{
                await client.connect();
                console.log('connected to db')
            } catch (err) {
                console.log('connect error', err)
            }
        },
    addToDB: async function(task){
        try{
            const result= await client.db('cs5610').collection('tasks').insertOne(task);
            console.log(result);
        } catch (err) {
            console.log('connection error', err);
        }
    },
    readAll: async function(){
        const result = await client.db('cs5610').collection('tasks').find();
        console.log(result);
    }
}