// server.js
const express = require('express');
const cors = require('cors');
const pgp = require('pg-promise')();

// --- Configuración de la base de datos ---
const cn = {
    host: 'database-2.cngkigmm2sd1.us-east-2.rds.amazonaws.com',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'admin1234',
    ssl: { rejectUnauthorized: false }
};
const db = pgp(cn);

// --- Funciones para manejar la DB ---
async function getPhrases() {
    try {
        return await db.any('SELECT * FROM frases');
    } catch (err) {
        console.error('Error consultando la DB:', err);
        return [];
    }
}

async function postPhrases(friendName, phrase) {
    try {
        await db.none('INSERT INTO frases(friend_name, phrase) VALUES($1, $2)', [friendName, phrase]);
        return { message: 'Frase agregada correctamente' };
    } catch (err) {
        console.error('Error agregando frase:', err);
        throw err;
    }
}

// --- Inicialización del servidor ---
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// --- Rutas ---
app.get('/api/frases', async (req, res) => {
    const data = await getPhrases();
    res.json(data);
});

app.post('/api/frases', async (req, res) => {
    const { friendName, phrase } = req.body;
    if (!friendName || !phrase) {
        return res.status(400).json({ error: 'Faltan campos' });
    }

    try {
        const result = await postPhrases(friendName, phrase);
        res.status(201).json(result);
    } catch (err) {
        console.error('Error en POST /api/frases:', err.message);
        res.status(500).json({ error: 'Error al agregar la frase' });
    }
});


// --- Levantar servidor ---
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}/api/frases`);
});
