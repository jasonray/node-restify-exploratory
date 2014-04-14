var server = require("./server");
var router = require("./router");
var helloworld = require("./requestHandlers/helloworld");
var pauseService = require("./requestHandlers/pauseService");

var handle = {};
handle["/hello"] = helloworld.sayHello;
handle["/pause"] = pauseService.pause;

server.start(router.route, handle);