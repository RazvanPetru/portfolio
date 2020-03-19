const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(
    bodyparser.urlencoded({
        extended: false
    })
);
// static files
app.use('/public', express.static(path.join(__dirname, 'public')));

// routes
const resumeRoutes = require('./routes/resume');

app.use(resumeRoutes);

// first page && 404 page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/views/404.html');
});

// port
app.listen(PORT);