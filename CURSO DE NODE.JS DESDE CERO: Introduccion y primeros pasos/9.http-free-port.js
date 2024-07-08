// Importamos el módulo 'http' de Node.js para crear un servidor HTTP.
const http = require('node:http');

// Importamos la función 'findAvailablePort' del archivo '10.free-port'.
// Esta función nos ayudará a encontrar un puerto libre para nuestro servidor HTTP.
const { findAvailablePort } = require('./10.free-port');

console.log(process.env);
const desiredPort = process.env.PORT ?? 3000;

// Creamos un servidor HTTP que responderá a las solicitudes entrantes.
const server = http.createServer((req, res) => {
  console.log('Request received'); // Registramos en la consola cuando se recibe una solicitud.

  res.end('<h1>Buenas buenas mundo!</h1>'); // Enviamos una respuesta con el mensaje 'Hola mundo!' a cada solicitud.
});

// Llamamos a 'findAvailablePort' para encontrar un puerto libre, comenzando con el puerto 3000.
findAvailablePort(desiredPort).then(port => {
  // Una vez que se encuentra un puerto disponible, hacemos que el servidor escuche en ese puerto.
  server.listen(port, () => {
    // Registramos en la consola que el servidor está escuchando en el puerto encontrado.
    console.log(`Server listening on port http://localhost:${port}`);
  });
});
