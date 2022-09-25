require("dotenv").config({
  path: `./config/.env.development`,
});

module.exports = {
  reactStrictMode: false,
  swcMinify: true,

  // CORS 오류 해결 소스로 작성하였으나
  // API_KEY 숨기는 용도로 추후에 재사용 예정
  // async rewrites() {
  //   return [
  //     {
  //       source: "/:path*",
  //       destination: "http://101.101.217.55:8080/:path*",
  //     },
  //   ]
  // },
  env: {
    // BASE_URL: process.env.BASE_URL,
  },
  // basePath: process.env.BASE_URL,
};
