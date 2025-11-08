# 🔢 GYMTONY V2 - SISTEMA DE VERSIONADO AUTOMÁTICO

## 🎯 **¿QUÉ ES?**

Sistema automático que incrementa la versión de la aplicación con cada modificación, manteniendo un historial completo de cambios y desplegando automáticamente a GitHub Pages.

---

## 🏗️ **ARQUITECTURA DEL SISTEMA**

### **📁 Archivos Principales:**
- **`version.json`** - Configuración de versión actual
- **`version-manager.js`** - Gestor completo de versiones (Node.js)
- **`increment-version.sh`** - Script simple de auto-incremento (Bash)
- **`SISTEMA_VERSIONADO.md`** - Esta documentación

### **🔄 Flujo Automático:**
1. **Ejecutar** script de incremento
2. **Leer** versión actual del `version.json`
3. **Incrementar** según tipo (major/minor/patch/build)
4. **Actualizar** todos los archivos automáticamente
5. **Hacer commit** con mensaje descriptivo
6. **Push** a GitHub (actualiza GitHub Pages)

---

## 🚀 **USO DEL SISTEMA**

### **Método 1: Script Simple (Recomendado)**
```bash
# Incrementar versión patch (corrección de bugs)
./increment-version.sh patch "Corrección de navegación"

# Incrementar versión minor (nueva funcionalidad)
./increment-version.sh minor "Nuevas funciones de backup"

# Incrementar versión major (cambios importantes)
./increment-version.sh major "Refactorización completa del UI"

# Solo incrementar build (cambios menores)
./increment-version.sh build "Optimización de rendimiento"
```

### **Método 2: Gestor Completo (Node.js)**
```bash
# Ver versión actual
node version-manager.js

# Ver ayuda completa
node version-manager.js help

# Incrementar versión con descripción
node version-manager.js minor "Sistema de backup mejorado"
```

---

## 📊 **TIPOS DE INCREMENTO**

| Tipo | Descripción | Cuándo Usar | Ejemplo |
|------|-------------|-------------|---------|
| **major** | Cambios importantes | Nueva arquitectura, ruptura de compatibilidad | v2.4.4 → **v3.0.0** |
| **minor** | Nuevas características | Nuevas funcionalidades, compatibilidad mantenida | v2.4.4 → **v2.5.0** |
| **patch** | Correcciones de bugs | Fixes, mejoras menores, compatibilidad mantenida | v2.4.4 → **v2.4.5** |
| **build** | Incremento de build | Cambios menores, optimizaciones, deployments | v2.4.4 (Build 1) → **v2.4.4 (Build 2)** |

---

## 📋 **ARCHIVOS ACTUALIZADOS AUTOMÁTICAMENTE**

### **🔄 Actualización Completa:**
- **`version.json`** - Configuración de versión actualizada
- **`manifest.json`** - Nombre de la app y versión PWA
- **`index.html`** - Título y meta descripción
- **Git Commit** - Mensaje descriptivo automático
- **Git Push** - Deploy automático a GitHub Pages

### **⚡ Actualización Rápida (Build):**
- **`version.json`** - Solo build number
- **Git Commit** - Mensaje de build automático
- **Git Push** - Deploy sin cambios de versión

---

## 📝 **ESTRUCTURA DEL VERSION.JSON**

```json
{
  "version": "2.4.4",
  "build": "1",
  "codeName": "nav-fix-release",
  "date": "2025-11-08",
  "description": "Navegación automática reparada - GitHub Pages optimizado",
  "changelog": [
    "📅 2025-11-08 12:16:32: Navegación automática reparada",
    "✅ Reparación definitiva de navegación automática",
    "✅ Optimización para GitHub Pages deployment"
  ],
  "author": "MiniMax Agent",
  "project": "GymTony V2",
  "semantic": {
    "major": 2,
    "minor": 4,
    "patch": 4,
    "build": 1
  }
}
```

---

## 🎯 **COMANDOS RÁPIDOS**

### **🔧 Tareas Comunes:**
```bash
# Patch release (más común)
./increment-version.sh patch "Corrección de [problema específico]"

# Minor release (nuevas features)
./increment-version.sh minor "Agregada funcionalidad de [feature]"

# Solo build (deployment rápido)
./increment-version.sh build "Optimización de rendimiento"

# Ver estado actual
node version-manager.js
```

### **📊 Consultas Útiles:**
```bash
# Ver versión actual
cat version.json | grep version

# Ver changelog reciente
cat version.json | grep changelog -A 10

# Ver última modificación
git log --oneline -1
```

---

## 🔄 **FLUJO DE TRABAJO RECOMENDADO**

### **Para Correcciones de Bugs (Patch):**
1. Identificar y solucionar el bug
2. Probar la corrección
3. Ejecutar: `./increment-version.sh patch "Corrección de [bug]"`
4. ✅ Deploy automático completado

### **Para Nuevas Funcionalidades (Minor):**
1. Desarrollar nueva feature
2. Probar funcionalidad completa
3. Ejecutar: `./increment-version.sh minor "Nueva funcionalidad: [feature]"`
4. ✅ Deploy automático completado

### **Para Cambios Importantes (Major):**
1. Planificar refactorización/cambio mayor
2. Desarrollar con retrocompatibilidad
3. Ejecutar: `./increment-version.sh major "[descripción del cambio]"`
4. ✅ Deploy automático completado

---

## 📈 **VENTAJAS DEL SISTEMA**

### **🎯 Para el Desarrollador:**
- ✅ **Automatización completa** - Sin necesidad de editar archivos manualmente
- ✅ **Historial detallado** - Changelog automático con cada cambio
- ✅ **Deployment automático** - GitHub Pages se actualiza automáticamente
- ✅ **Versionado semántico** - Sigue estándares de versionado profesional
- ✅ **Trazabilidad** - Cada versión tiene fecha, autor y descripción

### **🎯 Para el Usuario:**
- ✅ **Versiones claras** - Fácil identificar qué versión está usando
- ✅ **Actualizaciones organizadas** - Cambios agrupados lógicamente
- ✅ **Compatibilidad** - Minor/patch mantienen compatibilidad
- ✅ **Rastreamiento** - Saber cuándo se corrigieron problemas

---

## 🛠️ **SOLUCIÓN DE PROBLEMAS**

### **❌ Error: "No se encuentra version.json"**
**Solución:** Asegúrate de estar en el directorio correcto del proyecto
```bash
cd gymtony-v2-working
ls version.json
```

### **❌ Error: "Node.js no disponible"**
**Solución:** El script usa método alternativo automáticamente
```bash
# Usar script bash directamente
./increment-version.sh patch "Corrección sin Node.js"
```

### **❌ Error: "Permisos de git"**
**Solución:** Verificar configuración de git
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

### **❌ Error: "GitHub Pages no se actualiza"**
**Solución:** Esperar 1-2 minutos, luego limpiar caché del navegador
```bash
# Verificar estado del repositorio
git status
git log --oneline -3
```

---

## 📞 **EJEMPLOS PRÁCTICOS**

### **Escenario 1: Corrección de Bug**
```bash
# Problema: Navegación no funciona
# Solución: ./increment-version.sh patch "Navegación automática reparada"
# Resultado: v2.4.4 → v2.4.5
```

### **Escenario 2: Nueva Funcionalidad**
```bash
# Feature: Sistema de objetivos mejorado
# Comando: ./increment-version.sh minor "Sistema de objetivos v2"
# Resultado: v2.4.4 → v2.4.5
```

### **Escenario 3: Optimización**
```bash
# Mejora: Rendimiento de carga
# Comando: ./increment-version.sh build "Optimización de assets"
# Resultado: v2.4.4 (Build 1) → v2.4.4 (Build 2)
```

---

## 🎉 **¡SISTEMA LISTO!**

### **🚀 Próximos Pasos:**
1. **Probar el sistema:** `./increment-version.sh patch "Primera prueba del sistema"`
2. **Verificar deploy:** Comprobar GitHub Pages se actualiza
3. **Familiarizarse:** Usar el sistema en próximos desarrollos
4. **Documentar cambios:** El sistema mantiene el historial automáticamente

### **📋 Recordatorio:**
- **Patch** = Correcciones (más común)
- **Minor** = Nuevas funciones
- **Major** = Cambios importantes
- **Build** = Deploys rápidos

---

**🎯 ¡El sistema de versionado automático está completamente operativo y listo para usar!**

*Creado por: MiniMax Agent*  
*Fecha: 2025-11-08*  
*Versión del sistema: 1.0.0*