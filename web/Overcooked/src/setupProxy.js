// var process = require('child_process');
const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function(app) {
  // const time = new Date().getTime();
  // process.exec(`echo ${time} >> ./111.txt`,function (error, stdout, stderr) {
  //   if (error !== null) {
  //     console.log('exec error: ' + error);
  //     }
  // });
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3000',
      changeOrigin: true,
    })
  );
};