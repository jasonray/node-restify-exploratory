function sayHello(response) {
	console.log("Request handler 'hello' was called.");

	var body = '<html><body>hello world</body></html>';

	response.writeHead(200, {
		"Content-Type": "text/html"
	});
	response.write(body);
	response.end();
}

exports.sayHello = sayHello;