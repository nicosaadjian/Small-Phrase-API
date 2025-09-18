// el script del server tiene que irse a AWS para tener la app corriendo 'serverless' (??)

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const router = require('./src/routes');

app.use(cors());

app.use(express.json());
app.use('/api', router);

// por donde se levanta la app, puerto 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});