var koa = require('koa')

var app = koa()

app.use(function * (next) {
  yield this.render('index', {
    title: 'Koa'
  })
})

module.exports = app
