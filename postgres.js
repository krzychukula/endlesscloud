var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

/*
https://help.ubuntu.com/community/PostgreSQL
*/

var conString = process.env.DATABASE_URL || "postgres://endless:1234@localhost/cloud";

var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
    client.end();
  });
});


var client3 = new pg.Client(conString);
client3.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client3.query('insert into activity(type, stamp) VALUES ($1, $2)',
     [process.argv.slice(2), new Date()],
     function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
      console.log(result);
      //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
      client3.end();
    });
});



var client2 = new pg.Client(conString);
client2.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client2.query('select * from activity;', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result);
    //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
    client2.end();
  });
});