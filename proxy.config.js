module.exports = [
  {
    context: '/api',
    target: 'http://localhost:8081',
    secure: false,
    changeOrigin: true,
    logLevel: "debug"
  }
];
