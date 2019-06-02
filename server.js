const express = require('express'),
    // Sequelize = require('sequelize'),
    path = require('path'),
    cors = require('cors'),
    bp = require('body-parser'),
    port = 8000,
    app = express();



app.use(cors);
app.use(bp.json);
const react_path = path.join(__dirname, './client'); // CHANGE upon build --> './client/build'
    // unsure whether this file path is correct...
app.use(express.static(react_path));


require('./server/utils/sequelize');
require('./server/utils/routes')(app)