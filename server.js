'use strict';

var express = require('express');
var path = require('path');

var app = express();

// DEFINES A FOLDER FOR THE STATIC FILES
app.use(express.static(__dirname + '/public'));

// DEFINES THE MAIN ENTRY POINT
app.get('*', function(req, res){
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});


app.listen(3000, function(){
    console.log('App web-server listening on port 3000');
});