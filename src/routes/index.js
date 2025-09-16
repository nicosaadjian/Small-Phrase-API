const express = require('express');
const frasesRouter = require('./frases');

const router = express.Router();
router.use('/frases', frasesRouter);

// exporto el router de /frases
module.exports = router;