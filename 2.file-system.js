// El módulo 'fs' (file system) en Node.js es uno de los más importantes y utilizados.
// Permite interactuar con el sistema de archivos para leer, escribir, actualizar y eliminar archivos.
// 'fs' significa file system (sistema de archivos).

// El módulo 'fs' ofrece muchos métodos para manejar archivos.
// Una característica clave de Node.js es la capacidad de realizar operaciones de manera asíncrona vs. sincrona.
// Node.js es monohilo y está basado en eventos, lo que permite manejar muchas operaciones simultáneamente sin bloquear el proceso principal.

// A continuación, mostramos un ejemplo de cómo realizar una operación de forma síncrona usando el módulo 'fs'.
// La operación síncrona bloqueará el hilo principal hasta que se complete.

const fs = require("node:fs");

// Obtener información sobre el archivo 'archivo.txt' de forma síncrona
const stats = fs.statSync("./archivo.txt");

console.info(
  "¿Es un archivo?",
  stats.isFile(), // true si es un archivo
  "¿Es un directorio?",
  stats.isDirectory(), // true si es un directorio
  "¿Es un enlace simbólico?",
  stats.isSymbolicLink(), // true si es un enlace simbólico
  "Tamaño en bytes:",
  stats.size // Tamaño del archivo en bytes
);

// Resultado esperado:
// true false false 10
