module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd0776e1184154f393dd6315517fecfd0'),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "food and beverages"),
  }
});
