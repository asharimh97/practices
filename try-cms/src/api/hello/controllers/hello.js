// path: ./src/api/hello/controllers/hello.js

module.exports = {
  async custom(ctx, next) {
    ctx.body = 'Hello world!';
  }
}