const path = require("node:path");

// El módulo 'path' permite manejar y transformar rutas de archivos y directorios de manera fiable.
// Ofrece funcionalidades para construir nuevas rutas, verificar extensiones de archivos, recuperar extensiones, crear rutas absolutas, entre otras.

// Es importante no crear rutas de archivos directamente con cadenas de texto (e.g., './content/subfolder/test.txt').
// Esto se debe a que diferentes sistemas operativos utilizan diferentes separadores de rutas:
// - Unix y Linux utilizan "/"
// - Windows utiliza "\"

// El módulo 'path' gestiona estas diferencias automáticamente, asegurando que las rutas sean correctas en cualquier sistema operativo.

// Ejemplo: Obtener el separador de ruta específico del sistema operativo
console.log("Separador de ruta según el sistema operativo:", path.sep);

// El método 'path.join' se utiliza para unir segmentos de rutas de manera segura y correcta según el sistema operativo.
// A continuación, unimos las partes "content", "subfolder" y "test.txt" en una única ruta:
// Dependiendo del sistema operativo, 'path.join' se asegurará de usar el separador correcto (\ para Windows, / para Unix).

const filePath = path.join("content", "subfolder", "test.txt");
console.log("Ruta completa:", filePath);

// Utilizando path.basename para obtener el nombre del archivo de una ruta completa.
// Este método nos devuelve el nombre del archivo independientemente de la ruta.
const base = path.basename("/tmp/midu-secret-files/password.txt");
console.log("Nombre del archivo:", base);

// Utilizando path.basename con una extensión especificada para obtener el nombre del archivo sin su extensión.
// Esto nos devuelve solo el nombre del archivo, excluyendo la extensión proporcionada.
const fileName = path.basename("/tmp/midu-secret-files/password.txt", ".txt");
console.log("Nombre del archivo sin extensión:", fileName);

// Utilizando path.extname para obtener la extensión de un archivo.
// Este método nos devuelve la extensión del archivo, incluyendo el punto (.) inicial.
const extension = path.extname("image.jpg");
console.log("Extensión del archivo:", extension);
