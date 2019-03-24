const express = require('express');
let app = express();
let bodyParser = require('body-parser');
let cors = require('cors');
const database = require('../database/index.js')

app.use(cors())
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/quotesApp', function (req, res) {
  let author = req.body.Author;
  let quote = req.body.Quote;
  let quoteWithoutHypen = quote.replace("'","")
  console.log(quoteWithoutHypen)
  let date = new Date().toISOString().slice(0, 10);
  let qry = `INSERT INTO quotes (Author, Quote, IntroTime) VALUES ('${author}', '${quoteWithoutHypen}', '${date}')`

  database.connection.query(qry, function (err, result) {
    if (err) throw err;
    console.log('query inserded')
  })
  .then(res.sendStatus(200))
});

app.get('/quotesApp', function (req, res) {
  if(req.body){
    console.log(req.body)
  }
  let qry = `SELECT * FROM quotes`

  database.connection.query(qry, function (err, result) {
    if (err) throw err;
    res.send(result)
  })
});


app.delete('/quotesApp', function (req, res) {
  //need to make sure this is query is correct.
  let qry = `delete from quotes where AUTHOR ${req.body}`;

  database.connection.query(qry, function (err, result) {
    if (err) throw err;
    res.sendStatus(200)
  })
})

app.put('/quotesApp', function (req, res) {
  let qry = `delete from quotes where AUTHOR ${req.body}`
})

let port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

