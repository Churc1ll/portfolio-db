module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2cd1951bcf0ba079eb7d79d42623db34'),
  },
});
