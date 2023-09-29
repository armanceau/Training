const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
