// la extension .js -> por defecto utiliza CommonJS
// la extension .mjs -> para utilizar ES Modules
// la extencion .cjs -> para utilizar CommonJS
import { sum, sub, mult } from "./sum.mjs";

console.info(sum(1, 2));
console.info(sub(1, 2));
console.info(mult(1, 2));
