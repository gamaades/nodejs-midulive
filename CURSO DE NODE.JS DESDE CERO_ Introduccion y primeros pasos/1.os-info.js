// Creamos una constante y requerimos el módulo nativo os con el prefijo "node:".
// A partir de la versión 16 de Node.js, es recomendable usar "node:os" para mayor claridad y compatibilidad.
const os = require("node:os");

console.info('Información del sistema operativo:');
console.info('----------------------------------');

console.info('Plataforma del sistema operativo:', os.platform());
console.info('Versión del sistema operativo:', os.release());
console.info('Arquitectura del sistema operativo:', os.arch());
console.info("CPU's:", os.cpus()); // Nos permite ver la información de las CPU y escalar procesos en Node.js.
console.info('Memoria libre (MB):', (os.freemem() / 1024 / 1024).toFixed(2));
console.info('Memoria total (MB):', (os.totalmem() / 1024 / 1024).toFixed(2));
console.info('Tiempo de actividad (horas):', (os.uptime() / 3600).toFixed(2));
