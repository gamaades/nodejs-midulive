/**
 * En los módulos nativos que no tienen promesas nativas, se puede utilizar 'promisify' para convertir funciones basadas en callbacks en funciones que devuelven promesas.
 *
 * const { promisify } = require("node:util");
 * const readFilePromise = promisify(fs.readFile);
 */

import { readFile } from "node:fs/promises"; // Esto se puede realizar ya que el archivo tiene la extensión .mjs, permitiendo el uso de ES Modules.

/** Lectura de archivos de manera asíncrona utilizando async/await */
console.log("Leyendo el primer archivo...");

try {
  const text = await readFile("./archivo.txt", "utf-8");
  console.log("Primer texto:", text);
} catch (error) {
  console.error("Error leyendo el primer archivo:", error);
}

console.log("Leyendo el segundo archivo...");
try {
  const text2 = await readFile("./archivo2.txt", "utf-8");
  console.log("Segundo texto:", text2);
} catch (error) {
  console.error("Error leyendo el segundo archivo:", error);
}

/**
 * Esto funciona porque los archivos con extensión .mjs (ES Modules) soportan 'await' en el cuerpo del archivo, conocido como top-level await.
 * En Node.js, los archivos comunes (.js) no soportan top-level await sin un entorno ES Module.
 */