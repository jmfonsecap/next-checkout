module.exports = {
  async rewrites() {
    return [
      {
        source: '/checkout/:code',
        destination: '/:code', // Internally map it to match the expected dynamic page structure
      },
    ];
  },
};
