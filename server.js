const path = require('path');
const express = require('express');

const PORT = 3000;

const app = express();

app.get('/secret', (req, res) => {
   return res.send('Your personal secret code is 72');
});

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
   console.log(`Server running and listening on ${PORT}`);
});
