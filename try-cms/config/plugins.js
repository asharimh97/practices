module.exports = {
  graphql: {
    enabled: true,
    config: {
      enpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    }
  }
}