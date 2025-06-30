// Script para configurar package.json para FreeCodeCamp
const fs = require('fs');

function updatePackageJsonForFCC() {
  try {
    // Leer el archivo package.json actual
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    
    // Configuraciones específicas para FreeCodeCamp
    packageJson.author = "Franklin Sanchez Martinez";
    packageJson.main = "index.js";
    packageJson.name = "fcc-learn-npm-package-json";
    
    // Escribir el archivo actualizado
    fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
    
    console.log('✅ package.json configurado para FreeCodeCamp');
    console.log('📝 Autor: Franklin Sanchez Martinez');
    console.log('🎯 Main: index.js');
    console.log('📦 Name: fcc-learn-npm-package-json');
    
  } catch (error) {
    console.error('❌ Error al actualizar package.json:', error.message);
  }
}

// Ejecutar la configuración
updatePackageJsonForFCC();