/** @type {import('next').NextConfig} */

const path = require("path");

module.exports = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config) => {
    config.resolve.modules.push(path.resolve("./src/"));
    return config;
  },
};
