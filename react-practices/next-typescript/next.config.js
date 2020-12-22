const path = require("path");

const config = {
  "distDir": "build",
  webpack: (config, opts) => {
    // another webpack config here
    config.resolve.modules.push(path.resolve("./src/"));
    return config;
  },
}

module.exports = config;
