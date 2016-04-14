var mongoose  = require('mongoose'),
    Schema = mongoose.Schema;

var categorySchema = new Schema({
    name: {type: String, required: true, unique: true, lowercase: true}
});

module.exports = mongoose.model('Category', categorySchema);
