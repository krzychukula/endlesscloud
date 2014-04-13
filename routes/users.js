var express = require('express');
var router = express.Router();
var pg = require('pg');
var conString = process.env.DATABASE_URL || "postgres://endless:1234@localhost/cloud";

var getFromDB = function(callback){
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('select * from activity;', function(err, result) {
      if(err) {
        console.error('error running query', err);
      }
      console.log(result);
      //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
      client.end();
      callback(err, result);
    });
  });
}

var getActivities = function(req, res) {
  getFromDB(function(err, result){
    res.render('activities', { title: 'Express', activities: result.rows });
  })
};

/* GET users listing. */
router.get('/', getActivities);

module.exports = router;
