// 🚀 GYMTONY V2 - SISTEMA DE VERSIONADO AUTOMÁTICO
// ==================================================
// 
// Este sistema mantiene el build number alineado con la versión patch
// v2.4.6 (Build 6) → v2.4.7 (Build 7) → v2.4.8 (Build 8)

const fs = require('fs');
const path = require('path');

class VersionManager {
    constructor() {
        this.repoPath = path.join(__dirname);
        this.versionFile = 'version.json';
        this.bundleFile = 'assets/index-FnI7mOub.js';
        this.indexFile = 'index.html';
        this.manifestFile = 'manifest.json';
    }

    // 📊 Cargar versión actual
    getCurrentVersion() {
        const versionData = JSON.parse(fs.readFileSync(this.versionFile, 'utf8'));
        const [major, minor, patch] = versionData.semantic;
        return {
            major,
            minor,
            patch,
            version: `${major}.${minor}.${patch}`,
            build: versionData.build || patch
        };
    }

    // 🔄 Incrementar versión (patch por defecto)
    incrementVersion(type = 'patch', description = 'Actualización automática') {
        const current = this.getCurrentVersion();
        const [major, minor, patch] = [current.major, current.minor, current.patch];
        
        let newVersion, newBuild;
        let codeName;

        switch (type) {
            case 'major':
                newVersion = `${major + 1}.0.0`;
                newBuild = 0;
                codeName = 'major_release';
                break;
            case 'minor':
                newVersion = `${major}.${minor + 1}.0`;
                newBuild = 0;
                codeName = 'feature_release';
                break;
            case 'patch':
            default:
                newVersion = `${major}.${minor}.${patch + 1}`;
                newBuild = patch + 1; // Build number coincide con patch
                codeName = 'patch_update';
                break;
        }

        const [newMajor, newMinor, newPatch] = newVersion.split('.').map(Number);
        
        return {
            current,
            new: {
                major: newMajor,
                minor: newMinor,
                patch: newPatch,
                version: newVersion,
                build: newBuild,
                codeName,
                description,
                date: new Date().toISOString().split('T')[0]
            }
        };
    }

    // 💾 Actualizar archivos
    updateFiles(versionInfo) {
        const { new: newVersion } = versionInfo;
        const title = `GymTony V${newVersion.version} (Build ${newVersion.build})`;

        console.log('📝 Actualizando archivos...');
        console.log(`   🎯 Nuevo título: ${title}`);

        // 1. Actualizar index.html
        this.updateIndexHtml(newVersion, title);

        // 2. Actualizar JavaScript bundle
        this.updateBundle(newVersion, title);

        // 3. Actualizar manifest.json
        this.updateManifest(newVersion);

        // 4. Actualizar version.json
        this.updateVersionJson(versionInfo);

        return title;
    }

    // 📄 Actualizar index.html
    updateIndexHtml(newVersion, title) {
        let content = fs.readFileSync(this.indexFile, 'utf8');
        
        content = content.replace(
            /<title>GymTony V[^<]*<\/title>/,
            `<title>GymTony V${newVersion.version}</title>`
        );
        
        content = content.replace(
            /<meta name="description" content="[^"]*"/,
            `<meta name="description" content="GymTony V${newVersion.version} - Tu aplicacion de entrenamiento personalizada"`
        );

        // Actualizar comentario de build
        const buildComment = `<!-- Build ${newVersion.build}: Auto-versionado - ${newVersion.description} -->`;
        content = content.replace(/<!-- Build \d+:.*?-->/, buildComment);
        
        // Actualizar timestamp
        const timestamp = new Date().toISOString().replace(/[:.]/g, '_').slice(0, 19);
        content = content.replace(/v=\d{8}_\d{4}/, `v=${timestamp}`);

        fs.writeFileSync(this.indexFile, content);
        console.log('   ✅ index.html actualizado');
    }

    // 💻 Actualizar bundle JavaScript
    updateBundle(newVersion, title) {
        let content = fs.readFileSync(this.bundleFile, 'utf8');
        
        // Actualizar header
        content = content.replace(
            /\/\* GymTony V\d+\.\d+\.\d+ \(Build \d+\)/,
            `/* GymTony V${newVersion.version} (Build ${newVersion.build})`
        );
        
        // Actualizar título en el componente HomePage
        content = content.replace(
            /children:"GymTony V\d+\.\d+\.\d+ \(Build \d+\)"/,
            `children:"GymTony V${newVersion.version} (Build ${newVersion.build})"`
        );

        fs.writeFileSync(this.bundleFile, content);
        console.log('   ✅ JavaScript bundle actualizado');
    }

    // 📱 Actualizar manifest.json
    updateManifest(newVersion) {
        const manifestPath = path.join(this.repoPath, this.manifestFile);
        if (fs.existsSync(manifestPath)) {
            let manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
            manifest.name = `GymTony V${newVersion.version}`;
            manifest.version = newVersion.version;
            fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
            console.log('   ✅ manifest.json actualizado');
        }
    }

    // 📊 Actualizar version.json
    updateVersionJson(versionInfo) {
        const { current, new: newVersion } = versionInfo;
        
        const versionData = {
            version: newVersion.version,
            semantic: {
                major: newVersion.major,
                minor: newVersion.minor,
                patch: newVersion.patch
            },
            build: newVersion.build,
            codeName: newVersion.codeName,
            description: newVersion.description,
            date: newVersion.date,
            changelog: [
                `📅 ${new Date().toLocaleString('es-ES')}: ${newVersion.description}`,
                `🔄 Auto-increment: ${current.version} (Build ${current.build}) → ${newVersion.version} (Build ${newVersion.build})`
            ]
        };

        fs.writeFileSync(this.versionFile, JSON.stringify(versionData, null, 2));
        console.log('   ✅ version.json actualizado');
    }

    // 🎯 Ejecutar incremento completo
    async run(type = 'patch', description = 'Actualización automática del sistema') {
        try {
            console.log('🚀 Iniciando sistema de versionado automático...');
            
            const versionInfo = this.incrementVersion(type, description);
            const title = this.updateFiles(versionInfo);
            
            const { new: newVersion } = versionInfo;
            
            console.log('\n✅ ¡VERSIONADO COMPLETADO EXITOSAMENTE!');
            console.log('===========================================');
            console.log(`📍 Versión: ${newVersion.version}`);
            console.log(`🏷️  Build: ${newVersion.build}`);
            console.log(`🎯 Título: ${title}`);
            console.log(`📝 Descripción: ${newVersion.description}`);
            console.log(`📅 Fecha: ${newVersion.date}`);
            console.log('\n💡 El build number ahora coincide con la versión patch');
            console.log('🌐 GitHub Pages se actualizará automáticamente');
            
            return {
                success: true,
                version: newVersion.version,
                build: newVersion.build,
                title: title
            };
            
        } catch (error) {
            console.error('❌ Error durante el versionado:', error.message);
            return { success: false, error: error.message };
        }
    }
}

// 🎮 Interfaz de línea de comandos
if (require.main === module) {
    const args = process.argv.slice(2);
    const type = args[0] || 'patch';
    const description = args[1] || 'Actualización automática del sistema';
    
    const versionManager = new VersionManager();
    versionManager.run(type, description).then(result => {
        process.exit(result.success ? 0 : 1);
    });
}

module.exports = VersionManager;