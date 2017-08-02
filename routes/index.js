var Koa = require('koa')

var app = new Koa()

app.use(async function (ctx, next) {
  await ctx.render('index', {
    title: 'Koa'
  })
})

module.exports = app
