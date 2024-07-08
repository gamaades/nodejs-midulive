// Importamos el módulo 'net' de Node.js, que permite realizar conexiones utilizando el protocolo TCP.
// Este módulo es eficiente para conexiones TCP porque no requiere enviar tantas cabeceras como HTTP.
// Además, nos permite verificar si un servidor está disponible, abrir un servidor, etc.
const net = require('node:net');

// Definimos una función llamada 'findAvailablePort' que toma un puerto deseado como parámetro.
// La función devuelve una promesa que resolverá con un puerto disponible.
function findAvailablePort (desiredPort) {
  return new Promise((resolve, reject) => {
    // Creamos un nuevo servidor TCP.
    const server = net.createServer();

    // Intentamos que el servidor escuche en el puerto deseado.
    server.listen(desiredPort, () => {
      // Una vez que el servidor está escuchando, obtenemos el puerto asignado.
      const { port } = server.address();
      // Cerramos el servidor y resolvemos la promesa con el puerto disponible.
      server.close(() => {
        resolve(port);
      });
    });

    // Manejamos posibles errores que ocurran al intentar que el servidor escuche.
    server.on('error', (err) => {
      // Si el error indica que la dirección ya está en uso (puerto ocupado),
      // intentamos encontrar un puerto disponible a partir del puerto 0 (automáticamente asignado).
      if (err.code === 'EADDRINUSE') {
        findAvailablePort(0).then(port => resolve(port));
      } else {
        // Si ocurre cualquier otro error, rechazamos la promesa con el error.
        reject(err);
      }
    });
  });
}

// Exportamos la función 'findAvailablePort' para que pueda ser utilizada en otros módulos.
module.exports = { findAvailablePort };
