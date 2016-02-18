var express = require('express'),
    path = require('path'),
    app = express();


// HTTP port
var port = 81;

app
    .use('/lib', express.static(path.join(__dirname, '../Lib')))
    .use('/auth', require('../auth/app.js'))
    .use('/api/internacion', require('../api-internacion/app.js'))
    .use('/app/internacion', require('../app-internacion/app.js'))
    .listen(port, function() {
        console.log('vApp running on port %d on %s mode', port, app.get('env'));
    });
