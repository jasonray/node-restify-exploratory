var restify = require('restify');

var server = restify.createServer();
server.use(restify.queryParser());

server.use(restify.requestLogger({
	'k': 'v'
}));

var activeCalls = 0;
server.use(function(req, res, next) {
	activeCalls++;
	next();
	activeCalls--;
});

server.get('/hello', require("./requestHandlers/helloworld").sayHello);
server.get('/pause', require("./requestHandlers/pauseService").pause);

server.get('/math/add', require("./requestHandlers/math").add);
server.get('/math/subtract', require("./requestHandlers/math").subtract);

server.use(function handler2(req, res, next) {
	next();
});

server.listen(8888, function() {
});