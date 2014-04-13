var express = require('express');
var router = express.Router();
var pg = require('pg');



/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');

  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM your_table', function(err, result) {
      done();
      if(err) return console.error(err);
      console.log(result.rows);
    });
  });

});

module.exports = router;
