"use strict";

var serve = require('koa-static');
var views = require('koa-views');
var mount = require('koa-mount');
var koa = require('koa');
var index = require('./routes/index');
var app = module.exports = koa();

app.use(serve('public'));

app.use(views('views', {
  extension: 'jade'
}));

function logger(format) {
  format = format || ':method ":url"';

  return function *(next){
    var str = format
      .replace(':method', this.method)
      .replace(':url', this.url);

    console.log(str);

    yield next;
  }
}
app.use(logger());
app.use(logger(':method :url'));

app.use(mount('/', index));
