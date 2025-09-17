const db = require('../src/config/db');

async function testDB() {
  try {
    const result = await db.any('SELECT NOW()');
    console.log('Conexión exitosa ✅:', result);
  } catch (err) {
    console.error('Error de conexión ❌:', err);
  }
}

testDB();
