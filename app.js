var restify = require('restify');

var server = restify.createServer();
server.use(restify.queryParser());

server.get('/hello', require("./requestHandlers/helloworld").sayHello);
server.get('/pause', require("./requestHandlers/pauseService").pause);

server.get('/math/add', require("./requestHandlers/math").add);
server.get('/math/subtract', require("./requestHandlers/math").subtract);

server.listen(8888, function() {
	console.log('%s listening at %s', server.name, server.url);
});