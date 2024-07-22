// Importamos el módulo 'express'
const express = require('express');

// Importamos los datos de 'ditto' desde el archivo JSON
const ditto = require('./pokemon/ditto.json');

// Establecemos el puerto en el que va a escuchar la aplicación, con un valor por defecto de 1234 si no está definido en las variables de entorno
const PORT = process.env.PORT ?? 1234;

// Creamos una instancia de la aplicación Express
const app = express();

// Desactivamos el encabezado 'x-powered-by' por motivos de seguridad, para que no se informe que el servidor está utilizando Express
app.disable('x-powered-by');

// Express ya tiene un middleware incorporado, 'express.json()', que analiza las solicitudes con cuerpo en formato JSON
app.use(express.json());

// Middleware personalizado para procesar únicamente las solicitudes POST con Content-Type: application/json
// app.use((req, res, next) => {
//   if (req.method !== 'POST' || req.headers['content-type'] !== 'application/json') {
//     return next();
//   }

//   console.log('Middleware ejecutado para POST con Content-Type: application/json');

//   let body = '';
//   req.on('data', chunk => {
//     body += chunk.toString();
//   });

//   req.on('end', () => {
//     try {
//       const data = JSON.parse(body);
//       data.timestamp = Date.now(); // Añadimos una marca de tiempo a los datos
//       req.body = data; // Asignamos los datos al cuerpo de la solicitud
//       next();
//     } catch (error) {
//       res.status(400).send('Invalid JSON'); // Respondemos con un error si el JSON es inválido
//     }
//   });
// });

// Ruta principal que responde con un mensaje 'Hola Mundo' en formato JSON
app.get('/', (req, res) => {
  res.json({ message: 'Hola Mundo' });
});

// Ruta para obtener los datos del Pokémon 'ditto' desde el archivo JSON
app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto);
});

// Ruta para manejar las solicitudes POST al endpoint '/pokemon' y responder con el cuerpo de la solicitud en formato JSON
app.post('/pokemon', (req, res) => {
  res.status(200).json(req.body);
});

// Middleware para manejar las solicitudes que no coincidan con ninguna ruta definida y responder con un mensaje 404
app.use((req, res) => {
  res.status(404).send('<h1>404</h1>');
});

// Iniciamos el servidor en el puerto definido y mostramos un mensaje en la consola
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
