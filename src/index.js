"use strict"
const express = require('express');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true, limit: '50mb'}));
app.use(cors());

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname + '/views/index.html'));
})

app.use('/api', routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

