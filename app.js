const express = require('express');
const http = require('http');
const path = require('path');

const port = 9090;
//
// const api = require('./server/routes/api');

const app = express();

app.use(express.static(path.join(__dirname,'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const server = http.createServer(app);

server.listen(process.env.PORT || 5000)
