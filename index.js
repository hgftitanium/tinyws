/**  From https://betterprogramming.pub/build-a-simple-web-server-using-node-js-and-express-27f3d6eb4e86 */

const path = require('path');
const express = require('express');
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
    
    res.sendFile(`${__dirname}/public/index.html`);
});

app.get('/minimal', (req, res) => {
    
    res.sendFile(`${__dirname}/public/minimal.html`);
});

app.listen(3333, () => {
    console.log('Application listening on port 3333!');
});