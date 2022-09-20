/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode가 true라면 안전하기 않은 생명주기, 레거시 API 사용 및 개발하면서 디버깅하는 데 도움을 준다.
  // 렌더가 2회 되는 이슈 해결 -> reactStrictMode : false 
  reactStrictMode: false,
  swcMinify: true,
}

module.exports = nextConfig
