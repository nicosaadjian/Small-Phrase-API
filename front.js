// const endpoint = 'https://mi-ec2-public-url/api/frases';
const endpoint = 'http://18.222.25.162:3000/api/frases';

async function getPhrases() {
    try {
        const response = await fetch(endpoint);
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

    data.forEach(f => {
        const li = document.createElement('li');
        li.textContent = `${f.friend_name}: ${f.phrase}`;
        divPhrases.appendChild(li);
    });
}


