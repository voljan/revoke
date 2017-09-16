const http = require('http');

//   event emitters
//   streams
//   clusters
const server = http.createServer();
server.on('request', (req, res) => {
      res.write("Hello Node\n");

  setTimeout(() => {
    res.write("still on  ...");
  res.end();
}, 3000)

  //
});

server.listen(8080);
