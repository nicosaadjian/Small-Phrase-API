const express = require('express');
const { getPhrases, addPhrase, getMainPhrase} = require('../controllers/frasesController');

const router = express.Router();
router.get('/', getPhrases);

router.post('/', (req, res) => {
    const {friendName, phrase} = req.body;
    if (!friendName || !phrase) {
        return res.status(400).json({ error: 'Faltan campos' });
    }
    addPhrase(friendName, phrase);
    res.status(201).json({ message: 'Frase agregada' });
});

module.exports = router;