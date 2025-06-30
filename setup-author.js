// Script para configurar el autor en package.json para FreeCodeCamp
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function updatePackageJson(authorName) {
  try {
    // Leer el archivo package.json actual
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    
    // Actualizar el campo author
    packageJson.author = authorName;
    
    // Escribir el archivo actualizado
    fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
    
    console.log('✅ package.json actualizado correctamente!');
    console.log(`📝 Autor configurado como: ${authorName}`);
    console.log('🎯 Ahora puedes completar la primera tarea de FreeCodeCamp');
    
  } catch (error) {
    console.error('❌ Error al actualizar package.json:', error.message);
  }
}

// Preguntar por el nombre del autor
rl.question('Ingresa tu nombre para el campo "author" en package.json: ', (answer) => {
  if (answer.trim()) {
    updatePackageJson(answer.trim());
  } else {
    console.log('❌ Debes ingresar un nombre válido');
  }
  rl.close();
});