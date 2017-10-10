//ame as bopok but modify a few things to say author

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var AuthorSchema = new Schema({
  name: String,
  alive: Boolean,
  image: String
});

var Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;