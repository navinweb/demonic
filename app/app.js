import Koa from 'koa';
const logger = require('koa-morgan');
const Router = require('koa-router');
const bodyParser = require('koa-body');
const redis = require('redis');
const bluebird = require('bluebird');

bluebird.promisifyAll(redis.RedisClient.prototype);
const db = redis.createClient();

const app = new Koa();
const router = new Router();

router.get('/', async ctx => {
  ctx.body = '<h1>Demonic</h1>';
});

router.get('/about', async ctx => {
  ctx.body = '<h1>Demonic About</h1>';
});

router.post('/about', bodyParser(), async ctx => {
  await db.setAsync('WISP', 'Hey Ho');
  ctx.body = { data: ctx.request.body };
});

router.get('/learn', async ctx => {
  ctx.body = {
    title: 'Chernobog!!!',
    content: 'Test store'
  };
});

app.use(logger('tiny')).use(router.routes());

export default app;
