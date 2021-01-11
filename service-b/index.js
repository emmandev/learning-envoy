require('dotenv').config();
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = process.env.SERVICE_NAME || 'Service B';
});

app.listen(3000);
