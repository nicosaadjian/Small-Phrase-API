const objBridgedThroughConnection = 
{
    friendPhrases : [],
};

const addPhrase = 
    (friendName, phrase) => 
        objBridgedThroughConnection.friendPhrases.push({friendName : friendName, phrase : phrase});

addPhrase("Lucía", "No hay nada que un buen café no pueda arreglar.");
addPhrase("Tomás", "Si me buscás, estoy en la parrilla cuidando los choris.");
addPhrase("Sofía", "La próxima vez llevo yo la música, confíen.");
addPhrase("Julián", "Che, ¿y si mejor lo resolvemos mañana con la mente fresca?");
addPhrase("Valentina", "No sé si reírme o preocuparme, pero igual me reí.");
addPhrase("Agustín", "Tranqui, ya googleé y somos todos expertos ahora.");
addPhrase("Camila", "Esto se arregla con fernet, como todo en la vida.");
addPhrase("Nicolás", "Si me caigo, lo tomo como performance artística.");


const getMainPhrase = (data) => {
        data.forEach(element => {
        const [friendName, phrase] = element;
        console.log(`Yo soy ${friendName} y mi frase caracteristica es: ${phrase}`)
    });
}

const frases = objBridgedThroughConnection.friendPhrases;

const getPhrases = (req, res) =>{
    res.json(frases);
}

module.exports = { getPhrases, addPhrase, getMainPhrase };


