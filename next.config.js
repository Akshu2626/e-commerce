module.exports = {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.cache = false;  // Disable caching on the client side
    }
    return config;
  },
};
