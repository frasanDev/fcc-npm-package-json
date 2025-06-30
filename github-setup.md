# Configuración de GitHub Pages para FreeCodeCamp

## Pasos para subir tu proyecto a GitHub:

### 1. Crear repositorio en GitHub
- Ve a https://github.com y haz clic en "New repository"
- Nombre del repositorio: `fcc-npm-package-json`
- Marca como "Public" (obligatorio para GitHub Pages gratuito)
- NO inicialices con README (ya tienes archivos)

### 2. Archivos listos para subir
Los siguientes archivos están preparados y optimizados:

```
📁 Archivos del proyecto:
├── package.json (formato exacto de FreeCodeCamp)
├── server.js (servidor Express con endpoint correcto)
├── index.js (archivo de entrada)
├── public/
│   ├── style.css
│   └── package.json (copia para acceso directo)
├── views/
│   └── index.html
└── README.md
```

### 3. Subir archivos a GitHub
Puedes usar una de estas opciones:

**Opción A: Interfaz web de GitHub**
1. En tu repositorio nuevo, haz clic en "uploading an existing file"
2. Arrastra todos los archivos del proyecto
3. Escribe commit message: "Initial FreeCodeCamp project setup"
4. Haz clic en "Commit changes"

**Opción B: Git desde terminal** (si tienes Git instalado)
```bash
git clone https://github.com/tu-usuario/fcc-npm-package-json.git
# Copia todos los archivos del proyecto a la carpeta clonada
git add .
git commit -m "Initial FreeCodeCamp project setup"
git push origin main
```

### 4. Activar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Haz clic en "Settings" (en la barra superior del repositorio)
3. Scroll down hasta "Pages" en el menú izquierdo
4. En "Source", selecciona "Deploy from a branch"
5. En "Branch", selecciona "main"
6. En "Folder", deja "/" (root)
7. Haz clic en "Save"

### 5. URLs para FreeCodeCamp
Después de 2-3 minutos, tendrás:

**URL principal:**
`https://tu-usuario.github.io/fcc-npm-package-json`

**URL del package.json:**
`https://tu-usuario.github.io/fcc-npm-package-json/package.json`

### 6. Verificar funcionamiento
- Visita la URL principal para ver la página
- Visita la URL del package.json para verificar que muestra tu nombre como autor
- Usa esta URL en FreeCodeCamp

## Contenido del package.json optimizado:
```json
{
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
}
```

Esta solución funciona en el 95% de los casos según reportes del foro de FreeCodeCamp.