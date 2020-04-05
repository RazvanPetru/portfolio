const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(
  bodyparser.urlencoded({
    extended: true
  })
);
app.use('/public', express.static(path.join(__dirname, 'public')));

const resumeRoutes = require('./routes/resume');

app.use(resumeRoutes);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/.well-known/acme-challenge/N9BOQDKW0V9_cSUaHuEg6Wq6wkUqxTkUApnr4t90qjc', function (req, res) {
  res.send('N9BOQDKW0V9_cSUaHuEg6Wq6wkUqxTkUApnr4t90qjc.ket2r9uGNomFP5YxPui73gw3GW3DMvsBgCRiPnx8Q-s')
})

app.use((req, res) => {
  res.status(404).sendFile(__dirname + '/views/404.html');
});

// port
app.listen(PORT);