const db = require('../config/db');

async function createTable() {
    try {
        await db.none(`
            CREATE TABLE IF NOT EXISTS frases (
                id SERIAL PRIMARY KEY,
                friend_name TEXT NOT NULL,
                phrase TEXT NOT NULL
            )
        `);
        console.log('✅ Tabla creada: frases');
    } catch (err) {
        console.error('❌ Error al crear la tabla:', err.message);
    }
    process.exit();
}

createTable();
