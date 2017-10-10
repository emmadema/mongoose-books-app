//right now it has the right to control everything need to make seprate model for each aspect


var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: String,
  //need to refernece to author in author.js
  author: {
  	type: Schema.Types.ObjectId,
  	//find author that matched this
  	ref: 'Author'
  },
  image: String,
  releaseDate: String
});

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;
