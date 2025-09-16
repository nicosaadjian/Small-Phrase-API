const endpoint = 'http://localhost:3000/api/frases';

async function getPhrases(params) {
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        return data;
    } catch(error){
         console.error('Error al obtener las frases:', error);
         return [];
    }
}

// creo los eltos del dom aca directo

async function renderPhrase() {
    const data = await getPhrases();
    const divPhrases = document.getElementById('phrase-container-ul');

    data.forEach(f => {
        const li = document.createElement('li');
        li.textContent = `${f.friendName}: ${f.phrase}`;
        divPhrases.appendChild(li);
    });
}

const form = document.getElementById('add-phrase-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // evitar que la página recargue

    const friendName = document.getElementById('friendName').value;
    const phrase = document.getElementById('phrase').value;

    try {
        const response = await fetch('http://localhost:3000/api/frases', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ friendName, phrase })
        });

        if (!response.ok) throw new Error('Error al agregar frase');

        // refrescar la lista de frases
        renderPhrase();

        // limpiar inputs
        form.reset();

    } catch (err) {
        console.error(err);
    }
});
