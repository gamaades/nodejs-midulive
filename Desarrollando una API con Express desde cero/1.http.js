// Importamos el módulo 'http' de Node.js para crear un servidor HTTP.
const http = require('node:http');

const desiredPort = process.env.PORT ?? 1234;

const server = http.createServer((req, res) => {
  console.log('Request received');
  res.end('<h1>Buenas buenas!</h1>'); 
});



  server.listen(desiredPort, () => {

    console.log(`Server listening on port http://localhost:${port}`);
  });
