
var express = require('express');
var router = express.Router();
var db = require('../models');


// GET /pokemon - return a page with favorited Pokemon
router.get('/', function(req, res) {
  // TODO: Get all records from the DB and render to view
  db.poke.findAll()
  .then((poke)=> {
  		res.render('pokemon/index', { poke });
  })
  .catch((err) => {
  	console.log('err', err)
  	res.send('error dude')
  })
  
});

// POST /pokemon - receive the name of a pokemon and add it to the database
router.post('/', function(req, res) {
  // TODO: Get form data and add a new record to DB
  res.send(req.body);
});

module.exports = router;
