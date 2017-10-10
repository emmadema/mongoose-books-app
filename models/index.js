var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");
//mongo creates this database for it

module.exports.Book = require("./book.js");
//exporting the book whihc is a requirement of book.js
//allows server to grab this as well
//want all the models to be inside the index
//this allows the seed.js to only export one file instead of each indivdual one