var koa = require('koa');

var app = koa();

app.use(function* (next) {

  yield this.render('webgl', {
    title: 'WebGL'
  });

});

module.exports = app;
