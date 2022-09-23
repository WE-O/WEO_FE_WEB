require("dotenv").config({
  path: `./config/.env.development`,
});

module.exports = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    // BASE_URL: process.env.BASE_URL,
  },
  // basePath: process.env.BASE_URL,
};
