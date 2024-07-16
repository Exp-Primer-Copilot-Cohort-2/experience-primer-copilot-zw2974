// Create web server
// Create a new express server
var express = require('express');
var app = express();
// Create a new http server
var http = require('http');
var server = http.createServer(app);
// Create a new socket.io server
var io = require('socket.io').listen(server);
// Create a new redis client
var redis = require('redis');
var client = redis.createClient();
// Create a new redis client for subscriber
var sub = redis.createClient();
// Set the port
var port = 3000;
// Set the IP address
var ip = '
