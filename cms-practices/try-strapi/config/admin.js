module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bfb184fa543d311aca0180d16afd81ca'),
  },
});
