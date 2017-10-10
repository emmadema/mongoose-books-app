// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var books_list = [
  {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  image: "https://s3-us-west-2.amazonaws.com/sandboxapi/to_kill_a_mockingbird.jpg",
  releaseDate: "July 11, 1960"
  },
  {
  title: "The Great Gatsby",
  author: "F Scott Fitzgerald",
  image: "https://s3-us-west-2.amazonaws.com/sandboxapi/great_gatsby.jpg",
  releaseDate: "April 10, 1925"
  },
  {
  title: "Les Miserables",
  author: "Victor Hugo",
  image: "https://s3-us-west-2.amazonaws.com/sandboxapi/les_miserables.jpg",
  releaseDate: "Unknown 1862"
  },
  {
  title: "Around the World in 80 Days",
  author: "Jules Verne",
  image: "https://s3-us-west-2.amazonaws.com/sandboxapi/around_the_world_in_80_days.jpg",
  releaseDate: "January 30, 1873"
  },
  {
  title: "Lean In",
  author: "Sheryl Sandberg",
  image: "https://s3-us-west-2.amazonaws.com/sandboxapi/lean_in.jpg",
  releaseDate: "March 11, 2013"
  },
  {
  title: "The Four Hour Workweek",
  author: "Tim Ferriss",
  image: "https://s3-us-west-2.amazonaws.com/sandboxapi/four_hour_work_week.jpg",
  releaseDate: "April 1, 2007"
  },
  {
  title: "Of Mice and Men",
  author: "John Steinbeck",
  image: "https://s3-us-west-2.amazonaws.com/sandboxapi/of_mice_and_men.jpg",
  releaseDate: "Unknown 1937"
  },
  {
  title: "Romeo and Juliet",
  author: "William Shakespeare",
  image: "https://s3-us-west-2.amazonaws.com/sandboxapi/romeo_and_juliet.jpg",
  releaseDate: "Unknown 1597"
  }
];

var authors_list = [
  {
    name: "Harper Lee",
    alive: false
  },
  {
    name: "F Scott Fitzgerald",
    alive: false
  },
  {
    name: "Victor Hugo",
    alive: false
  },
  {
    name: "Jules Verne",
    alive: false
  },
  {
    name: "Sheryl Sandberg",
    alive: true
  },
  {
    name: "Tim Ferriss",
    alive: true
  },
  {
    name: "John Steinbeck",
    alive: false
  },
  {
    name: "William Shakespeare",
    alive: false
  }
];

db.Author.remove({}, function(err, authors) {
  //firs you are rmeeoving everything from the dtatabase author collection
  console.log('removed all authors');
  db.Author.create(authors_list, function(err, authors){
    //now you are creating the author list form the array of authors
    if (err) {
      console.log(err);
      return;
      //consle log if there is an error or exit function
    }
    console.log('recreated all authors');
    console.log("created", authors.length, "authors");
    //how many authors created


    db.Book.remove({}, function(err, books){
      //removing all the books
      console.log('removed all books');
      books_list.forEach(function (bookData) {
        //going through the stataic arrray and running a for each function
        var book = new db.Book({
          //for each one making var of book a new book for book data.titile
          //the author is missing because it s a spearte function
          title: bookData.title,
          image: bookData.image,
          copy: bookData.paste,
          releaseDate: bookData.releaseDate
        });
        db.Author.findOne({name: bookData.author}, function (err, foundAuthor) {
          //going into author collectio
          //looking for name that has book data of author that exists
          //once we have found the author then keep going
          //findOne: finding only on instance - wants to find it one at a time because of for each
          console.log('found author ' + foundAuthor.name + ' for book ' + book.title);
          if (err) {
            console.log(err);
            return;
          }
          book.author = foundAuthor;
          //matches book.author to actual foundAuthor object
          //does this string = this string
          book.save(function(err, savedBook){
            if (err) {
              return console.log(err);
            }
            console.log('saved ' + savedBook.title + ' by ' + foundAuthor.name);
          });
        });
      });
    });
  });
});
