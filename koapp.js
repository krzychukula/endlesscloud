'use strict'

var serve = require('koa-static')
var views = require('koa-views')
var mount = require('koa-mount')
var Koa = require('koa')
var index = require('./routes/index')
var webgl = require('./routes/webgl')
var app = module.exports = new Koa()

app.use(serve('public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

app.use(mount('/webgl', webgl))
app.use(mount('/', index))
