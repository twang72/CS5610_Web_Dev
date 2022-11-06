//import mongoose
const mongoose = require ('mongoose')

//create a schema
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    markdown: {
        type: String,
        required: true
    },
    createdTime: {
        type: Date,
        default: Date.now
    }
})

//Export the schema created above
module.exports = mongoose.model('Article', articleSchema)
