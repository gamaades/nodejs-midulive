const fs = require('node:fs/promises');
const path = require('node:path');
const pc = require('picocolors');

// Esta línea obtiene el argumento de la línea de comandos para especificar la carpeta a listar.
// Ejemplo: $ node 8.ls-advanced.js ./cjs
// Si no se proporciona ningún argumento, por defecto lista el directorio actual.
const folder = process.argv[2] ?? '.';

// Lee el contenido del directorio especificado en 'folder'.
async function ls (folder) {
  let files;
  try {
    files = await fs.readdir(folder);
  } catch (error) {
    console.error(pc.red(`Error, no se pudo leer el directorio ${folder}`));
    process.exit(1);
  }

  const filesPromises = files.map(async (file) => {
    const filePath = path.join(folder, file);
    let stats;
    try {
      stats = await fs.stat(filePath); // status - informacion del archivo
    } catch (error) {
      console.error(pc.red(`No se pudo leer el archivo ${filePath}`));
      process.exit(1);
    }

    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? 'd' : 'f';
    const fileSize = stats.size;
    const fileModified = stats.mtime.toLocaleDateString();

    return `${pc.bgMagenta(fileType)} ${pc.blue(file.padEnd(29))} ${pc.green(
      fileSize.toString().padStart(10)
    )} ${pc.yellow(fileModified)}`;
  });

  const filesInfo = await Promise.all(filesPromises);

  filesInfo.forEach((fileInfo) => console.log(fileInfo));
}

ls(folder);
// 1.42.30 NPM
