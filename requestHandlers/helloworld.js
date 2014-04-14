var Negotiator = require('negotiator')

function sayHello(response, request) {
	console.log("Request handler 'hello' was called.");

	var availableMediaTypes = ['text/text', 'text/plain', 'application/json', 'application/xml', 'text/html'];
	var negotiator = new Negotiator(request);
	// console.log("request Accept mediatypes: " + negotiator.mediaTypes());
	// console.log("potential negotiated mediatypes: " + negotiator.mediaTypes(availableMediaTypes));
	var negotiatedMediaType = negotiator.mediaType(availableMediaTypes);
	// console.log("negotiated mediatype: " + negotiator.mediaType(availableMediaTypes));

	if (negotiatedMediaType == 'text/text' || negotiatedMediaType == 'text/plain') {
		response.writeHead(200, {
			"Content-Type": negotiatedMediaType
		});
		response.write('hello world');
		response.end();
	} else if (negotiatedMediaType == 'application/json') {
		response.writeHead(200, {
			"Content-Type": "application/json"
		});
		response.write('{message: "hello world}');
		response.end();
	} else if (negotiatedMediaType == 'text/html') {
		response.writeHead(200, {
			"Content-Type": "text/html"
		});
		response.write('<html><body>hello world</body></html>');
		response.end();
	} else {
		response.writeHead(200, {
			"Content-Type": "text/text"
		});
		response.write('hello world');
		response.end();
	}

}

exports.sayHello = sayHello;