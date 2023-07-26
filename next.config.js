/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const nextConfig = {
  env:{
    MONGODB_URI:"mongodb://localhost:27017/REal-Estate"
  },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(
          new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
          })
        );
      
        return config;
      },
}

module.exports = nextConfig
