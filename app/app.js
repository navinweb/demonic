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

router.get('/', (ctx) => {
    ctx.body = '<h1>Demonic</h1>';
});

router.post('/about', bodyParser(), async (ctx) => {
    await db.setAsync('WISP', 'Hey Ho');
    ctx.body = { data: ctx.request.body };
});

app
.use(logger('tiny'))
.use(router.routes());

export default app;
