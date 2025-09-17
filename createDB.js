const db = require('./src/config/db');

async function createDatabase() {
    try {
        await db.none('CREATE DATABASE frases_db');
        console.log('✅ Base de datos creada: frases_db');
    } catch (err) {
        console.error('❌ Error al crear la base:', err.message);
    }
    process.exit();
}

createDatabase();
