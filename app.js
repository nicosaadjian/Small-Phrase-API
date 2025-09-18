const db = require('./src/config/db');

async function getPhrases(){
    return db.any("SELECT * FROM frases");
}

async function postPhrases(friendName, phrase){
    db.none('INSERT INTO frases(friendName, phrase) VALUES($1, $2)', [friendName, phrase]);
}

