// 🚀 GYMTONY V2 - INICIALIZACIÓN DEL SISTEMA DE VERSIONADO AUTOMÁTICO
// ===================================================================
// 
// Este script inicializa el sistema de versionado automático
// Actualiza a V2.4.7 (Build 7) como primera versión con sistema automático

const VersionManager = require('./version-updater.js');
const fs = require('fs');
const path = require('path');

class AutoVersioningInit {
    constructor() {
        this.versionManager = new VersionManager();
    }

    // 📋 Verificar estado actual
    checkCurrentState() {
        console.log('🔍 Verificando estado actual del repositorio...\n');
        
        // Verificar archivos principales
        const files = [
            'index.html',
            'assets/index-FnI7mOub.js',
            'version-updater.js',
            '.github/workflows/auto-version.yml'
        ];
        
        files.forEach(file => {
            const exists = fs.existsSync(path.join(__dirname, file));
            console.log(`${exists ? '✅' : '❌'} ${file}`);
        });
        
        // Verificar git
        try {
            const { execSync } = require('child_process');
            execSync('git rev-parse --git-dir', { stdio: 'pipe' });
            console.log('✅ Git repository detected');
        } catch (error) {
            console.log('❌ Not a git repository');
            return false;
        }
        
        return true;
    }

    // 🎯 Inicializar a V2.4.7 (Build 7)
    async initToV247() {
        console.log('\n🚀 INICIALIZANDO SISTEMA DE VERSIONADO AUTOMÁTICO');
        console.log('==================================================');
        console.log('📍 Objetivo: GymTony V2.4.7 (Build 7)');
        console.log('🔧 Sistema: Build number coincide con versión patch\n');
        
        try {
            // Crear version.json si no existe
            if (!fs.existsSync('version.json')) {
                console.log('📄 Creando version.json inicial...');
                const initialVersion = {
                    version: "2.4.6",
                    semantic: {
                        major: 2,
                        minor: 4,
                        patch: 6
                    },
                    build: 6,
                    codeName: "auto_versioning_init",
                    description: "Inicialización del sistema de versionado automático",
                    date: new Date().toISOString().split('T')[0],
                    changelog: [
                        `📅 ${new Date().toLocaleString('es-ES')}: Inicialización del sistema de versionado automático`,
                        `🔧 Sistema que mantiene build number sincronizado con versión patch`
                    ]
                };
                fs.writeFileSync('version.json', JSON.stringify(initialVersion, null, 2));
            }
            
            // Ejecutar incremento a V2.4.7 (Build 7)
            const result = await this.versionManager.run('patch', 'Sistema de versionado automático - Build number sincronizado');
            
            if (result.success) {
                console.log('\n✅ ¡INICIALIZACIÓN COMPLETADA EXITOSAMENTE!');
                console.log('===========================================');
                console.log(`🎯 Versión: ${result.version}`);
                console.log(`🏷️  Build: ${result.build}`);
                console.log(`📱 Título: ${result.title}`);
                console.log('\n🔄 PRÓXIMAS ACTUALIZACIONES SERÁN AUTOMÁTICAS:');
                console.log('   v2.4.8 (Build 8) → v2.4.9 (Build 9) → v2.4.10 (Build 10)');
                console.log('\n💡 GitHub Actions activado para versionado automático');
                console.log('🌐 GitHub Pages se actualizará automáticamente\n');
                
                return result;
            } else {
                throw new Error(result.error);
            }
            
        } catch (error) {
            console.error('❌ Error durante la inicialización:', error.message);
            return { success: false, error: error.message };
        }
    }

    // 📚 Mostrar instrucciones
    showInstructions() {
        console.log('\n📖 INSTRUCCIONES DEL SISTEMA AUTOMÁTICO');
        console.log('=======================================');
        console.log('\n🔄 AUTOMÁTICO (Recomendado):');
        console.log('   • Cada push/commit incrementará automáticamente');
        console.log('   • v2.4.7 (Build 7) → v2.4.8 (Build 8) → v2.4.9 (Build 9)');
        console.log('   • Build number siempre coincide con versión patch');
        console.log('   • GitHub Actions maneja todo el proceso');
        
        console.log('\n🎮 MANUAL:');
        console.log('   node version-updater.js [patch|minor|major] "descripción"');
        console.log('   Ejemplo: node version-updater.js patch "Nueva mejora"');
        
        console.log('\n📊 TRACKING:');
        console.log('   • version.json: Configuración de versiones');
        console.log('   • Título: Se actualiza automáticamente en la app');
        console.log('   • GitHub Pages: Se actualiza en 1-2 minutos');
        
        console.log('\n🌐 URLS IMPORTANTES:');
        console.log('   • App: https://jstony2000.github.io/gymtony-v2-working/');
        console.log('   • Repo: https://github.com/jstony2000/gymtony-v2-working');
        console.log('   • Actions: https://github.com/jstony2000/gymtony-v2-working/actions\n');
    }

    // 🚀 Ejecutar inicialización completa
    async run() {
        console.log('🎯 GYMTONY V2 - SISTEMA DE VERSIONADO AUTOMÁTICO');
        console.log('================================================\n');
        
        // Verificar estado
        if (!this.checkCurrentState()) {
            console.log('❌ No se puede continuar sin un repositorio git válido');
            return false;
        }
        
        // Inicializar a V2.4.7 (Build 7)
        const result = await this.initToV247();
        
        if (result.success) {
            // Mostrar instrucciones
            this.showInstructions();
            return true;
        } else {
            console.error('❌ Inicialización fallida:', result.error);
            return false;
        }
    }
}

// 🎮 Ejecutar si se llama directamente
if (require.main === module) {
    const init = new AutoVersioningInit();
    init.run().then(success => {
        process.exit(success ? 0 : 1);
    });
}

module.exports = AutoVersioningInit;