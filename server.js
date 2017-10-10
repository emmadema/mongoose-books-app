// server.js
// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express'),
  bodyParser = require('body-parser'),
  db = require('./models');

// generate a new express app and call it 'app'
var app = express();

// serve static files in public
app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

// define a root route: localhost:3000/
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

// get all books
//app.get is expree route and everything inside of it is mongoose
app.get('/api/books', function (req, res) {
  // send all books as JSON response
  db.Book.find()
    // populate fills in the author id with all the author data
    .populate('author')
    //check mongo datat base for author and popluate that before resing out
    //now wont just get random ids
    .exec(function(err, books){
      //.exexcute
      //
      if (err) { return console.log("index error: " + err); }
      res.json(books);
    });
});

// create new book
app.post('/api/books', function (req, res) {
  // create new book with form data (`req.body`)
  var newBook = new db.Book({
    title: req.body.title,
    image: req.body.image,
    releaseDate: req.body.releaseDate,
    copy: req.body.paste
  });

  // this code will only add an author to a book if the author already exists
  db.Author.findOne({name: req.body.author}, function(err, author){
    //search for the author
    newBook.author = author;
    // add newBook to database
    //assign new book that author
    newBook.save(function(err, book){
      //saving that new book
      //saving things as a string not an object
      if (err) {
        return console.log("create error: " + err);
      }
      console.log("created ", book.title);
      res.json(book);
      //resing the new book
    });
  });

});

// delete book
app.delete('/api/books/:id', function (req, res) {
  // get book id from url params (`req.params`)
  console.log(req.params);
  var bookId = req.params.id;

  db.Book.findOneAndRemove({ _id: bookId }, function (err, deletedBook) {
    res.json(deletedBook);
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at http://localhost:3000/');
});
