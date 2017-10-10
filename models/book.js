// book.js
//should only have one schema
var mongoose = require('mongoose'); //require mongoose
var Schema = mongoose.Schema; //one method will be to create a schema

var BookSchema = new Schema({ //new instance of a schema
     title: String,
     author: String,
     image: String,
     releaseDate: String
    // you should fill the rest of this in

 });

// create a model for out schema
//encompasses all other parts on the doc
var Book = mongoose.model('Book', BookSchema);

//now we can use this to produce content

module.exports = Book;
//exports the book so other things can use it
//only exports the varibale your declare
