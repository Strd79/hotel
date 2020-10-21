// npm init -y
// npm install express
// npm install --save -dev nodemon
// npm install --save -dev cors
// npm install body-parser
// npm install mongodb

const express = require('express');
const app = express();
const cors = require('cors');
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js')

app.use(cors());
app.use(parser.json())

MongoClient.connect('mongodb://localhost/27017')
.then((client) => {
  const db = client.db('guests');
  const bookingsCollection = db.collection('bookings');
  const bookingsRouter = createRouter(bookingsCollection);
  app.use('/api/bookings', bookingsRouter);
})
.catch(console.err)

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});