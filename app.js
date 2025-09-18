const db = require('./src/config/db');

async function getPhrases(){
    return db.any("SELECT * FROM frases");
}

async function postPhrases(friendName, phrase){
    db.none('INSERT INTO frases(friendName, phrase) VALUES($1, $2)', [friendName, phrase]);
}

async function main() {
    console.log("Si estoy corriendo app.js ok en AWS EC2 desde Ubuntu, a continuacion se imprimira LA HORA:\n");
    
    try {
        const result = await db.any("SELECT NOW();");
        console.log(result);
    } catch (err) {
        console.error("Error consultando la DB:", err);
    }
}

main();