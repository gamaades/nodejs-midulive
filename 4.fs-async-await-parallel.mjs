// Importamos la función readFile del módulo fs/promises de Node.js.
// Esto es posible porque el archivo tiene la extensión .mjs, permitiendo el uso de ES Modules.
import { readFile } from "node:fs/promises";

/**
 * Lectura paralela de dos archivos utilizando Promise.all.
 * 
 * En esta implementación, se realiza la lectura de dos archivos de manera simultánea.
 * Esto permite una ejecución más rápida ya que ambas operaciones se realizan en paralelo.
 * Promise.all espera a que ambas promesas se resuelvan y devuelve un array con los resultados.
 * 
 * Ventajas:
 * - Mayor eficiencia al realizar dos tareas simultáneas en lugar de secuencialmente.
 * - Control sobre el orden de ejecución de las lecturas y manejo de errores centralizado.
 */

Promise.all([
  readFile("./archivo.txt", "utf-8"), // Promesa para leer el archivo 1
  readFile("./archivo2.txt", "utf-8"), // Promesa para leer el archivo 2
])
  .then(([text, text2]) => {
    console.log("Primer texto:", text); // Imprime el contenido del primer archivo
    console.log("Segundo texto:", text2); // Imprime el contenido del segundo archivo
  })
  .catch((error) => {
    console.error("Error leyendo los archivos:", error); // Manejo centralizado de errores
  });
