# <img src="https://cloud.githubusercontent.com/assets/7833470/10423298/ea833a68-7079-11e5-84f8-0a925ab96893.png" width="60"> Book App

## Prerequisites

* Express
* Mongo
* Mongoose
* jQuery
* AJAX (xhr requests)

## Exercise

We'll be building a full stack javascript app incrementally.

* At first it's going to be a list of **books**
* Then we'll add in **authors**
* Finally we'll embed **character** data in each book

[Sprint 1 - Mongoose](docs/sprint1.md)

Let's create an **author** model that gets referenced in the **book** model!

[Sprint 2 - Reference & Populate](docs/sprint2.md)

Let's create a **character** model that gets embedded in the **book** model!

[Sprint 3 - Embedded](docs/sprint3.md)

## Licensing
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.

Emmas-MacBook-Pro:~ emmademango$ cd desktop
Emmas-MacBook-Pro:desktop emmademango$ cd wdi-work/
Emmas-MacBook-Pro:wdi-work emmademango$ git clone https://github.com/emmadema/mongoose-books-app.git
Cloning into 'mongoose-books-app'...
remote: Counting objects: 1517, done.
remote: Total 1517 (delta 0), reused 0 (delta 0), pack-reused 1517
Receiving objects: 100% (1517/1517), 1.15 MiB | 645.00 KiB/s, done.
Resolving deltas: 100% (526/526), done.
Emmas-MacBook-Pro:wdi-work emmademango$ subl .
Emmas-MacBook-Pro:wdi-work emmademango$ cd mongoose-books-app/
Emmas-MacBook-Pro:mongoose-books-app emmademango$ subl .
Emmas-MacBook-Pro:mongoose-books-app emmademango$ npm install
npm notice created a lockfile as package-lock.json. You should commit this file.
added 48 packages in 2.362s
Emmas-MacBook-Pro:mongoose-books-app emmademango$ nodemon
[nodemon] 1.12.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Example app listening at http://localhost:3000/
books index
books create { title: 'Emma\'s Book', author: 'Emma' }
books index
^CEmmas-MacBook-Pro:mongoose-books-app emmademango$ 
Emmas-MacBook-Pro:mongoose-books-app emmademango$ nodemon
[nodemon] 1.12.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Example app listening at http://localhost:3000/
books index
^CEmmas-MacBook-Pro:mongoose-books-app emmademango$ 
Emmas-MacBook-Pro:mongoose-books-app emmademango$ npm install --save mongoose
+ mongoose@4.12.1
added 27 packages in 2.474s
Emmas-MacBook-Pro:mongoose-books-app emmademango$ touch models/book.js
Emmas-MacBook-Pro:mongoose-books-app emmademango$ node seed.js
(node:5232) DeprecationWarning: `open()` is deprecated in mongoose >= 4.11.0, use `openUri()` instead, or set the `useMongoClient` option if using `connect()` or `createConnection()`. See http://mongoosejs.com/docs/connections.html#use-mongo-client
removed all books
created 8 books
Emmas-MacBook-Pro:mongoose-books-app emmademango$ mongod
2017-10-10T10:36:37.401-0600 I CONTROL  [initandlisten] MongoDB starting : pid=5236 port=27017 dbpath=/data/db 64-bit host=Emmas-MacBook-Pro.local
2017-10-10T10:36:37.402-0600 I CONTROL  [initandlisten] db version v3.4.7
2017-10-10T10:36:37.402-0600 I CONTROL  [initandlisten] git version: cf38c1b8a0a8dca4a11737581beafef4fe120bcd
2017-10-10T10:36:37.402-0600 I CONTROL  [initandlisten] OpenSSL version: OpenSSL 1.0.2l  25 May 2017
2017-10-10T10:36:37.402-0600 I CONTROL  [initandlisten] allocator: system
2017-10-10T10:36:37.402-0600 I CONTROL  [initandlisten] modules: none
2017-10-10T10:36:37.402-0600 I CONTROL  [initandlisten] build environment:
2017-10-10T10:36:37.402-0600 I CONTROL  [initandlisten]     distarch: x86_64
2017-10-10T10:36:37.402-0600 I CONTROL  [initandlisten]     target_arch: x86_64
2017-10-10T10:36:37.402-0600 I CONTROL  [initandlisten] options: {}
2017-10-10T10:36:37.410-0600 I STORAGE  [initandlisten] exception in initAndListen: 98 Unable to lock file: /data/db/mongod.lock Resource temporarily unavailable. Is a mongod instance already running?, terminating
2017-10-10T10:36:37.410-0600 I NETWORK  [initandlisten] shutdown: going to close listening sockets...
2017-10-10T10:36:37.410-0600 I NETWORK  [initandlisten] shutdown: going to flush diaglog...
2017-10-10T10:36:37.410-0600 I CONTROL  [initandlisten] now exiting
2017-10-10T10:36:37.410-0600 I CONTROL  [initandlisten] shutting down with code:100
Emmas-MacBook-Pro:mongoose-books-app emmademango$ mongod
2017-10-10T10:36:52.196-0600 I CONTROL  [initandlisten] MongoDB starting : pid=5237 port=27017 dbpath=/data/db 64-bit host=Emmas-MacBook-Pro.local
2017-10-10T10:36:52.197-0600 I CONTROL  [initandlisten] db version v3.4.7
2017-10-10T10:36:52.197-0600 I CONTROL  [initandlisten] git version: cf38c1b8a0a8dca4a11737581beafef4fe120bcd
2017-10-10T10:36:52.197-0600 I CONTROL  [initandlisten] OpenSSL version: OpenSSL 1.0.2l  25 May 2017
2017-10-10T10:36:52.197-0600 I CONTROL  [initandlisten] allocator: system
2017-10-10T10:36:52.197-0600 I CONTROL  [initandlisten] modules: none
2017-10-10T10:36:52.197-0600 I CONTROL  [initandlisten] build environment:
2017-10-10T10:36:52.197-0600 I CONTROL  [initandlisten]     distarch: x86_64
2017-10-10T10:36:52.197-0600 I CONTROL  [initandlisten]     target_arch: x86_64
2017-10-10T10:36:52.197-0600 I CONTROL  [initandlisten] options: {}
2017-10-10T10:36:52.197-0600 I STORAGE  [initandlisten] exception in initAndListen: 98 Unable to lock file: /data/db/mongod.lock Resource temporarily unavailable. Is a mongod instance already running?, terminating
2017-10-10T10:36:52.197-0600 I NETWORK  [initandlisten] shutdown: going to close listening sockets...
2017-10-10T10:36:52.197-0600 I NETWORK  [initandlisten] shutdown: going to flush diaglog...
2017-10-10T10:36:52.197-0600 I CONTROL  [initandlisten] now exiting
2017-10-10T10:36:52.197-0600 I CONTROL  [initandlisten] shutting down with code:100
Emmas-MacBook-Pro:mongoose-books-app emmademango$ node seed.js
(node:5240) DeprecationWarning: `open()` is deprecated in mongoose >= 4.11.0, use `openUri()` instead, or set the `useMongoClient` option if using `connect()` or `createConnection()`. See http://mongoosejs.com/docs/connections.html#use-mongo-client
removed all books
created 8 books
Emmas-MacBook-Pro:mongoose-books-app emmademango$ mongo
MongoDB shell version v3.4.7
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.7
Server has startup warnings: 
2017-10-09T15:02:51.948-0600 I CONTROL  [initandlisten] 
2017-10-09T15:02:51.948-0600 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2017-10-09T15:02:51.948-0600 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2017-10-09T15:02:51.948-0600 I CONTROL  [initandlisten] 
> use boo-app
switched to db boo-app
> use book-app
switched to db book-app
> db.books.find();
{ "_id" : ObjectId("59dcf738d40d6614788b4886"), "title" : "To Kill a Mockingbird", "author" : "Harper Lee", "image" : "https://s3-us-west-2.amazonaws.com/sandboxapi/to_kill_a_mockingbird.jpg", "releaseDate" : "July 11, 1960", "__v" : 0 }
{ "_id" : ObjectId("59dcf738d40d6614788b4887"), "title" : "The Great Gatsby", "author" : "F Scott Fitzgerald", "image" : "https://s3-us-west-2.amazonaws.com/sandboxapi/great_gatsby.jpg", "releaseDate" : "April 10, 1925", "__v" : 0 }
{ "_id" : ObjectId("59dcf738d40d6614788b4888"), "title" : "Les Miserables", "author" : "Victor Hugo", "image" : "https://s3-us-west-2.amazonaws.com/sandboxapi/les_miserables.jpg", "releaseDate" : "Unknown 1862", "__v" : 0 }
{ "_id" : ObjectId("59dcf738d40d6614788b4889"), "title" : "Around the World in 80 Days", "author" : "Jules Verne", "image" : "https://s3-us-west-2.amazonaws.com/sandboxapi/around_the_world_in_80_days.jpg", "releaseDate" : "January 30, 1873", "__v" : 0 }
{ "_id" : ObjectId("59dcf738d40d6614788b488a"), "title" : "Lean In", "author" : "Sheryl Sandberg", "image" : "https://s3-us-west-2.amazonaws.com/sandboxapi/lean_in.jpg", "releaseDate" : "March 11, 2013", "__v" : 0 }
{ "_id" : ObjectId("59dcf738d40d6614788b488b"), "title" : "The Four Hour Workweek", "author" : "Tim Ferriss", "image" : "https://s3-us-west-2.amazonaws.com/sandboxapi/four_hour_work_week.jpg", "releaseDate" : "April 1, 2007", "__v" : 0 }
{ "_id" : ObjectId("59dcf738d40d6614788b488d"), "title" : "Romeo and Juliet", "author" : "William Shakespeare", "image" : "https://s3-us-west-2.amazonaws.com/sandboxapi/romeo_and_juliet.jpg", "releaseDate" : "Unknown 1597", "__v" : 0 }
{ "_id" : ObjectId("59dcf738d40d6614788b488c"), "title" : "Of Mice and Men", "author" : "John Steinbeck", "image" : "https://s3-us-west-2.amazonaws.com/sandboxapi/of_mice_and_men.jpg", "releaseDate" : "Unknown 1937", "__v" : 0 }
> 