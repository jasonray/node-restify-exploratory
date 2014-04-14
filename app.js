var restify = require('restify');

var server = restify.createServer();
server.use(restify.queryParser());

var activeCalls = 0;
server.use(function(req, res, next) {
	activeCalls++;
	console.log('active calls (pre): ' + activeCalls);
	next();
	activeCalls--;
	console.log('active calls: (post)' + activeCalls);
});

server.get('/hello', require("./requestHandlers/helloworld").sayHello);
server.get('/pause', require("./requestHandlers/pauseService").pause);

server.get('/math/add', require("./requestHandlers/math").add);
server.get('/math/subtract', require("./requestHandlers/math").subtract);

server.use(function handler2(req, res, next) {
	console.log('handler2');
	next();
});

server.listen(8888, function() {
	console.log('%s listening at %s', server.name, server.url);
});