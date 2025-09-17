const db = require('./src/config/db');

async function testSelect() {
    const rows = await db.any('SELECT * FROM frases');
    console.log(rows);
    process.exit();
}

testSelect();
