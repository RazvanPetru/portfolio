const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

// static files
app.use('/public', express.static(path.join(__dirname, 'public')));

// routes

// first page && 404 page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.use((req, res) => {
    res.status(404).send('<h1>404</h1>');
});

// port
app.listen(PORT);