var express = require('express'),
    app = express();


// HTTP port
var port = 81;

app.use('/api/internacion', require('../api-internacion/app.js'))
    .use('/app/internacion', require('../app-internacion/app.js'))
    .listen(port, function() {
        console.log('vApp running on port %d', port);
    });
