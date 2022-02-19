// path: ./src/api/hello/routes/hello.js

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/hello',
      handler: 'hello.custom',
      config: {
        auth: false,
        policies: ['api::hello.hello-policies'],
      }
    },
    {
      method: 'GET',
      path: '/hello/bandung',
      handler: 'hello.bandung',
      config: {
        auth: false,
        policies: ['api::hello.hello-policies'],
      }
    }
  ]
}