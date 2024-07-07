const fs = require("node:fs");

// Utilizamos fs.readdir para leer el contenido del directorio actual.
// El primer argumento es el directorio que queremos leer, en este caso "." representa el directorio actual.
// El segundo argumento es una función callback que se ejecuta después de que fs.readdir haya terminado de leer el directorio.

// La función fs.statSync obtiene información del archivo de manera sincrónica. Si el archivo no existe, lanzará una excepción.
// fs.statSync('./1.os-info.jss');

fs.readdir(".", (err, files) => {
  if (err) {
    // Si ocurre un error durante la lectura del directorio, lo manejamos aquí.
    console.error("Error al leer el directorio:", err);
    return;
  }

  // files es un array que contiene los nombres de los archivos en el directorio.
  // Utilizamos forEach para iterar sobre cada archivo en el array.
  files.forEach((file) => {
    // Imprimimos el nombre de cada archivo en el directorio.
    console.log(file);
  });
});