// NodeBulidIn Objects
    var path = require('path');

// NodeModules Objects
    var express = require('express');
    var morgan = require('morgan');
    var bodyParser = require('body-parser');
    var favicon = require('serve-favicon');

// API Objects

// Create Server
    var app = express();

// MiddleWare
    app.use(express.static(''));

// Routes

// Listen Server
    app.listen(5555);
    console.log('server listening with port 5555 ...');
