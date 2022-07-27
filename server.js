const https = require('https');
const fs = require('fs');
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

https.createServer({
      'cert': fs.readFileSync('cert.pem'),
      'key': fs.readFileSync('key.pem'),
   }, app).listen(PORT, () => {
   console.log(`Server running and listening on ${PORT}`);
});

/*  
How to geneartae a self signed certificate:
"openssl req -x509 -newkey rsa:4096 -nodes -keyout key.pem -out cert.pem -days 365"
*/