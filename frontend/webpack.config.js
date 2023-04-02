module.exports = {
    // other configuration options
    resolve: {
        fallback: {
          path: require.resolve("path-browserify"),
          async_hooks: require.resolve("async_hooks"),
          crypto: require.resolve("crypto-browserify"),
          fs: false,
          stream: require.resolve("stream-browserify"),
          zlib: require.resolve("browserify-zlib"),
          http: require.resolve("http-browserify")
        }
      }
      
  };
  