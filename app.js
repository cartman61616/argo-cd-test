const express = require('express');
const app = express();
const port = 3000;

app.listen(port);
console.log(`App listening at http://localhost:${port}`);


app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

app.get('/', (req, res) => {
    const name = ProcessingInstruction.env.NAME || 'World';
    res.send(`Hello ${name}!`);
});
