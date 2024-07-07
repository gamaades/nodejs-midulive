// Importamos el módulo 'fs/promises' (file system) de Node.js.
// Este módulo permite interactuar con el sistema de archivos para leer, escribir, actualizar y eliminar archivos, utilizando promesas.
const fs = require("node:fs/promises");

/** Lectura de archivos de manera asincrona utilizando promesas */
console.log("Leyendo el primer archivo de manera asincrona con promesas");
fs.readFile("./archivo.txt", "utf-8")
  .then((text) => {
    console.log("Primer texto:", text);
  })
  .catch((err) => {
    console.error("Error leyendo el primer archivo:", err);
  });
// fs.readFile devuelve una promesa. Cuando la promesa se resuelve, se ejecuta el código dentro de .then().

console.log('---> Realizando otras tareas mientras se lee el archivo asincrónicamente');

console.log("Leyendo el segundo archivo de manera asincrona con promesa");
fs.readFile("./node.txt", "utf-8")
  .then((text) => {
  console.log("Segundo texto:", text);
  })
  .catch((err) => {
    console.error("Error leyendo el segundo archivo:", err);
  });

/** 
 * Utilizar promesas permite manejar el código asíncrono de manera más legible y manejable en comparación con callbacks.
 * Mientras se lee el primer archivo, otras tareas pueden continuar ejecutándose.
 * Al ser promesas, se garantiza que el código continuará ejecutándose mientras las operaciones de lectura de archivos se completan.
 * Muchos módulos de Node.js ahora ofrecen una versión basada en promesas (como 'fs/promises'), facilitando la transición desde el uso clásico de callbacks.
 */
