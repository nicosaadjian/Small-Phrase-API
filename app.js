const db = require('./src/config/db');

async function getPhrases(){
    return db.any("SELECT * FROM frases");
}

async function postPhrases(friendName, phrase){
    db.none('INSERT INTO frases(friendName, phrase) VALUES($1, $2)', [friendName, phrase]);
}

console.log("Si estoy corriendo app.js ok en AWS EC2 desde Ubunbtu, a continuacion se imprimira LA HORA:\n");
console.log(db.any("SELECT NOW();"));