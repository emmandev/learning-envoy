require('dotenv').config();
const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();


router.get('/', ctx => {
  ctx.body = process.env.SERVICE_NAME || 'Gateway';
})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
