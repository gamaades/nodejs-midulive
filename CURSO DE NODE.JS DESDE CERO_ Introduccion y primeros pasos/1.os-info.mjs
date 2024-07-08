// Creamos una constante y requerimos el módulo nativo os con el prefijo "node:".
// A partir de la versión 16 de Node.js, es recomendable usar "node:os" para mayor claridad y compatibilidad.
import { platform, release, arch, cpus, freemem, totalmem, uptime } from "node:os";

console.info('Información del sistema operativo:');
console.info('----------------------------------');

console.info('Plataforma del sistema operativo:', platform());
console.info('Versión del sistema operativo:', release());
console.info('Arquitectura del sistema operativo:', arch());
console.info("CPU's:", cpus()); // Nos permite ver la información de las CPU y escalar procesos en Node.js.
console.info('Memoria libre (MB):', (freemem() / 1024 / 1024).toFixed(2));
console.info('Memoria total (MB):', (totalmem() / 1024 / 1024).toFixed(2));
console.info('Tiempo de actividad (horas):', (uptime() / 3600).toFixed(2));
