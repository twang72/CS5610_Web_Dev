//import mongoose
const mongoose = require('mongoose')
const {marked} = require('marked')
const slugify = require('slugify')


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
    },
    slug: {
        type: String,
        required: true,
        unique: true
    }
})

//This function will create the slug from article title -- it will be run each time while we do the CRUD process.
articleSchema.pre('validate', function(next) {
    if(this.title) {
        this.slug = slugify(this.title, { lower: true, strict: true })
    }

    next()
})

//Export the schema created above
module.exports = mongoose.model('Article', articleSchema)
