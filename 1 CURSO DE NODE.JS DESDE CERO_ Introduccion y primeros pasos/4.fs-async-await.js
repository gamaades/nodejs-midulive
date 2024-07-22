/**
 * Ejemplo de uso de una función auto-invocada en un archivo con extensión .js.
 */

const { readFile } = require("node:fs/promises"); // Importación correcta de readFile desde fs/promises

// Función auto-invocada (IIFE: Immediately Invoked Function Expression)
// Esto significa que la función se ejecuta inmediatamente después de ser definida.
(async () => {
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
})();
