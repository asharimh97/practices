// path: ./src/api/hello/routes/hello.js

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/hello',
      handler: 'hello.custom',
      config: {
        auth: false
      }
    }
  ]
}