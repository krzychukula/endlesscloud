var pg = require('pg');
var connectionString = process.env.DATABASE_URL || "postgres://endless:1234@localhost/cloud";

/* inspired by
http://dailyjs.com/2011/09/26/heroku/
*/


client = new pg.Client(connectionString);
client.connect(function(err) {

  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('create table "activity" ('+
                '  id          serial primary key'+
                ', type        text'+
                ', stamp       timestamp);', function(err, result) {

    if(err) {
      return console.error('error running query', err);
    }
    console.log(result);
    client.end();

  });
});