// Importamos el módulo 'fs' (file system) de Node.js.
// El módulo 'fs' permite interactuar con el sistema de archivos para leer, escribir, actualizar y eliminar archivos.
const fs = require("node:fs");

/** Lectura de archivos de manera sincrona */
console.log("Leyendo el primer archivo");
const text = fs.readFileSync("./archivo.txt", "utf-8"); // fs.readFileSync devuelve el contenido del archivo como un buffer por defecto.
// Especificamos 'utf-8' como la codificación para obtener una cadena de texto legible, evitando problemas con acentos y caracteres especiales.
console.log(text);

console.log("Leyendo el segundo archivo");
const secondText = fs.readFileSync("./archivo2.txt", "utf-8");
console.log(secondText);

/** Lectura de archivos de manera asincrona */
console.log("Leyendo el tercero archivo de manera asincrona");
fs.readFile("./archivo.txt", "utf-8", (err, text) => {
  if (err) {
    console.error("Error leyendo el archivo:", err);
    return;
  }
  console.log("Primer texto", text);
}); // fs.readFile acepta un callback que se ejecuta cuando la lectura del archivo se completa.

console.log("---> Hacer cosas mientras lee el archivo");

console.log("Leyendo el cuarto archivo de manera asincrona");
fs.readFile("./archivo2.txt", "utf-8", (err, text) => {
  if (err) {
    console.error("Error leyendo el archivo:", err);
    return;
  }
  console.log("Segundo texto", text);
});

/** Un callback es una función que se ejecuta cuando se completa una tarea asíncrona.
 * En este caso, se usa para manejar la lectura de archivos de manera no bloqueante. */
