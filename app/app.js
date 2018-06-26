import Koa from 'koa';
const logger = require('koa-morgan');
const Router = require('koa-router');
const serve = require('koa-static');
const bodyParser = require('koa-body');
const {
  Posts
} = require('../db');

const server = new Koa();
const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = '<h1>Demonic</h1>';
});

router.get('/about', async (ctx) => {
  ctx.body = '<h1>Demonic About</h1>';
});

router.get('/learn', async (ctx) => {
  const collection = await Posts.findAll();
  const index = Math.floor(collection.length * Math.random());
  const post = collection[index];
  ctx.body = post;
});

server.use(logger('tiny'))
  .use(serve('public'))
  .use(router.routes());

export default server;
