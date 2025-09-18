const db = require('../config/db');

async function insertData() {
    const frases = [
        { friend_name: "Marco", phrase: "Gabagool" },
        { friend_name: "Mole", phrase: "Eeee vamo a toma una birra" },
        { friend_name: "Martin", phrase: "Le instalo Linux a la Wii" },
        { friend_name: "Porra", phrase: "Es BUENISIMO" },
        { friend_name: "Facu", phrase: "Amigoooh" },
    ];

    try {
        for (const f of frases) {
            await db.none(
                'INSERT INTO frases(friend_name, phrase) VALUES($1, $2)',
                [f.friend_name, f.phrase]
            );
        }
        console.log('✅ Datos insertados');
    } catch (err) {
        console.error('❌ Error insertando datos:', err.message);
    }
    process.exit();
}

// insertData();
// este insertData es el que quiero que sea el post de mi frontend
