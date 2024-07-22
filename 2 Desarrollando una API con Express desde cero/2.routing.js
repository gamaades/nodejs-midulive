const http = require('node:http');
// En commonJS -> módulos clásicos de Node se puede importar JSON automáticamente
const dittoJSON = require('./pokemon/ditto.json');

// el siguiente código es para procesar la request. lo importante está en el processRequest
const processRequest = (req, res) => {
  const { method, url } = req;

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          return res.end(JSON.stringify(dittoJSON));

        default:
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          return res.end('<h1>404 Not Found</h1>');
      }

    case 'POST':
      switch (url) {
        case '/pokemon':{
          let body = '';
          // en request, tiene que escuchar el evento Data. chuck seria un trozo. en este caso chunk es un buffer, por lo que esta recibiendo binarios, por lo que tendriamos que transformarlo en un string
          req.on('data', chunk => {
            body += chunk.toString();
          });

          req.on('end', () => {
            try {
              const data = JSON.parse(body);
              // Llamar a una base de datos para guardar la info
              res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' });
              // Acá obtendriamos el momento en el cual creamos dicho pokemon
              data.timestamp = Date.now();
              res.end(JSON.stringify(data));
            } catch (error) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json; charset=utf-8');
              res.end(JSON.stringify({ error: 'Invalid JSON' }));
            }
          });
          break;
        }

        default:
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
          return res.end('404 Not Found');
      }
  }
};

// el siguiente código es para crear el servidor y procesar la request
const server = http.createServer(processRequest);

server.listen(1234, () => {
  console.info('Server listening on port http://localhost:1234');
});
