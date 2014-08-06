var serve = require('koa-static');
var views = require('koa-views');
var mount = require('koa-mount');
var koa = require('koa');
var index = require('./routes/index');
var app = module.exports = koa();

app.use(serve('public'));

app.use(views('views', {
  default: 'jade'
}));

app.use(mount('/', index));

