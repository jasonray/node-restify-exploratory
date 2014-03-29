var server = require("./server");
var router = require("./router");
var helloworld = require("./requestHandlers/helloworld");

var handle = {}
handle["/hello"] = helloworld.sayHello;

server.start(router.route, handle);