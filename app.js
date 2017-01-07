var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);


app.get('/', function(req, res) {
    console.log('received request');
    res.send('<h1>works</h1>');
});

io.on('connection', function(){ /* … */ });
server.listen(3000);


