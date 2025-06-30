// Script para crear package.json exacto del boilerplate FreeCodeCamp
const fs = require('fs');

function createFCCPackageJson() {
  // Package.json exacto del boilerplate oficial de FreeCodeCamp
  const fccPackageJson = {
    "name": "fcc-learn-npm-package-json",
    "author": "Franklin Sanchez Martinez",
    "dependencies": {
      "express": "^4.14.0"
    },
    "main": "server.js",
    "scripts": {
      "start": "node server.js"
    },
    "repository": {
      "type": "git",
      "url": "https://github.com/freeCodeCamp/boilerplate-npm.git"
    }
  };
  
  try {
    // Escribir el package.json con formato exacto
    fs.writeFileSync('package.json', JSON.stringify(fccPackageJson, null, 2));
    
    console.log('✅ Package.json creado con formato oficial de FreeCodeCamp');
    console.log('📝 Autor: Franklin Sanchez Martinez');
    console.log('🎯 Express version: ^4.14.0 (como requiere FreeCodeCamp)');
    
  } catch (error) {
    console.error('❌ Error al crear package.json:', error.message);
  }
}

// Ejecutar la configuración
createFCCPackageJson();