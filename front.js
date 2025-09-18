const endpoint = 'https://mi-ec2-public-url/api/';

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
        li.textContent = `${f.friendName}: ${f.phrase}`;
        divPhrases.appendChild(li);
    });
}
