const http = require('http');

const express = require('express');

const app = express();

const homepage = require('./homepage');

// const aboutRouter = require('./login');

app.use('/', homepage);

// app.use('/login', aboutRouter);

const server = http.createServer(app);  
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});