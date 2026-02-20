const http = require('http');

const express = require('express');

const app = express();

const aboutRouter = require('./about');

app.use('/about', aboutRouter);


app.get('/', (req, res) => {
    res.send(' this home page');
});

app.get('/login', (req, res) => {
    res.send('this Login Page');
});

const server = http.createServer(app);  
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});