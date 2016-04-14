var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var postSchema = new Schema({
    title: String,
    date_created: Date,
    date_updated: Date,
    content: {type: String, required: true},
    categories: [String]
})

module.exports = mongoose.model('Post', postSchema)