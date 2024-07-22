// Importamos el módulo 'http' de Node.js para crear un servidor HTTP.
const http = require('node:http');
const fs = require('node:fs');

const desiredPort = process.env.PORT ?? 1234;

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8'); // aca le indicamos la codificacion de los caracteres.
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('<h1>Bienvenidos a mi página de inicio.</h1>');
  } else if (req.url === '/image-falabella') {
    fs.readFile('./falabella.png', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('<h1>500 Internal Server Error</h1>');
      } else {
        res.setHeader('Content-Type', 'image.png');
        res.end(data);
      }
    });
  } else if (req.url === '/contacto') {
    res.statusCode = 200;
    res.end('<h1>Contacto</h1>');
  } else {
    res.statusCode = 404; // Not Found
    res.end('<h1>404</h1>');
  }
};

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
  console.log(`Server listening on port http://localhost:${desiredPort}`);
});
