const process = require("process"); // El objeto 'process' es un objeto global en Node.js, no requiere 'require', pero se puede utilizar así para claridad.

/**
 * El objeto 'process' proporciona información y control sobre el proceso de ejecución actual.
 * Tiene propiedades y métodos que permiten interactuar con el entorno de Node.js y obtener información del proceso actual.
 */

// Ejemplo de cómo recuperar los argumentos de entrada al ejecutar un comando.
// 'process.argv' devuelve una matriz que contiene los argumentos de la línea de comandos.
console.log(process.argv);

/**
 * Podemos controlar la salida del proceso utilizando 'process.exit()'.
 * Se le puede pasar un código de salida: 
 * 0 indica que el proceso terminó correctamente.
 * 1 indica que hubo un error y se debe finalizar el proceso.
 */
// process.exit(0);

/**
 * Podemos controlar eventos del proceso. Por ejemplo, podemos escuchar el evento 'exit' para realizar acciones
 * como limpiar recursos antes de que el proceso finalice.
 */
process.on('exit', () => {
    console.log("El proceso está a punto de finalizar. Limpiando recursos...");
});

/**
 * 'process.cwd()' devuelve el directorio de trabajo actual desde donde se ejecuta el proceso.
 */
console.log(process.cwd());

/**
 * 'process.platform' devuelve una cadena que identifica la plataforma del sistema operativo en la que se está ejecutando Node.js.
 * 'process.cpuUsage()' devuelve el uso de la CPU del proceso actual.
 */
console.log(process.platform);
console.log(process.cpuUsage());

/**
 * 'process.env' devuelve un objeto que contiene las variables de entorno del usuario.
 * Por ejemplo, para ver la variable de entorno 'PEPITO', se puede ejecutar:
 * $ PEPITO=hola node 7.process.js
 */
console.log(process.env.PEPITO);
