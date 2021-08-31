module.exports = {
  devServer: {
    proxy: {
      '/socket.io': {
        target: 'http://localhost:3030/socket.io',
        changeOrigin: true,
        pathRewrite: { '^/socket.io': '' },
      },
    },
  },
};
