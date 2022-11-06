const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */

const result = require('dotenv').config({path: `./config/.env`})
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: result.parsed,
}

module.exports = withBundleAnalyzer(nextConfig)