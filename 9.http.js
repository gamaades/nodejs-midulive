// Importamos el módulo nativo de HTTP de Node.js. Este módulo nos permite crear servidores HTTP,
// manejar solicitudes (requests) y enviar respuestas (responses).
const http = require('node:http');

// Creamos un servidor utilizando http.createServer. Este método recibe un callback que se ejecuta
// cada vez que el servidor recibe una solicitud. El callback tiene dos parámetros:
// req (request) y res (response), que se utilizan para manejar la solicitud y la respuesta respectivamente.
const server = http.createServer((req, res) => {
  // Imprimimos en la consola un mensaje indicando que se ha recibido una solicitud.
  console.log('Request received');

  // Finalizamos la respuesta enviando el mensaje 'Hola mundo!' al cliente.
  res.end('Hola mundo!');
});

// Configuramos el servidor para que escuche en un puerto específico. En este caso, utilizamos 0,
// lo que significa que el sistema asignará automáticamente un puerto disponible.
server.listen(0, () => {
  // Una vez que el servidor comienza a escuchar, imprimimos en la consola un mensaje indicando
  // que el servidor está escuchando, junto con el puerto asignado.
  console.log(`Server listening on port http://localhost:${server.address().port}`);
});
