module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '555bd1717f58b5a92c821ecaddbd42b7'),
  },
});
