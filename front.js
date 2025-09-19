// const endpoint = 'https://mi-ec2-public-url/api/frases';
// const endpoint = 'http://18.222.25.162:3000/api/frases';
// const endpoint = 'https://5858440034c3.ngrok-free.app/api/frases';
const endpoint = ' https://613072bfd6b7.ngrok-free.app/api/frases';
// cada vez que levanto ngrok me cambia el puerto


async function getPhrases() {
    try {
        // const response = await fetch(endpoint);
        const response = 
        
        await fetch(endpoint, {
                method: 'GET', // o POST
                headers: {
                    'Content-Type': 'application/json',
                    'ngrok-skip-browser-warning': '69420'
                }
            });

        return await response.json();
    } catch(err) {
        console.error(err);
        return [];
    }
}

async function postPhrase(friendName, phrase) {
    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ friendName, phrase })
        });
        return await response.json();
    } catch(err) {
        console.error(err);
    }
}

async function renderPhrase() {
    const data = await getPhrases();
    const divPhrases = document.getElementById('phrase-container-ul');
    divPhrases.innerHTML = ''; // limpiar lista antes de renderizar

    data.forEach(f => {
        const li = document.createElement('li');
        li.classList.add('mb-2'); // opcional, separación entre items

        // Crear span para friendName en negrita
        const friendSpan = document.createElement('span');
        friendSpan.textContent = f.friend_name;
        friendSpan.style.fontWeight = 'bold'; // o usar friendSpan.classList.add('friend-name');

        // Crear span para frase en cursiva y entre comillas
        const phraseSpan = document.createElement('span');
        phraseSpan.textContent = `"${f.phrase}"`;
        phraseSpan.style.fontStyle = 'italic'; // o usar phraseSpan.classList.add('phrase-text');

        // Combinar los spans en el li
        li.appendChild(friendSpan);
        li.appendChild(document.createTextNode(': ')); // separador
        li.appendChild(phraseSpan);

        // Agregar li al ul
        divPhrases.appendChild(li);
    });
}