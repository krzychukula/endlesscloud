var Koa = require('koa')

var app = new Koa()

app.use(async function (ctx, next) {
  await ctx.render('webgl', {
    title: 'WebGL'
  })
})

module.exports = app
