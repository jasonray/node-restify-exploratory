var Negotiator = require('negotiator');

function sayHello(request, response, next) {
	var logger = require('bunyan').createLogger({name: "helloService"});

	logger.info("Request handler 'hello' was called.");

	var availableMediaTypes = ['text/text', 'text/plain', 'application/json', 'application/xml', 'text/html'];
	var negotiator = new Negotiator(request);
	var negotiatedMediaType = negotiator.mediaType(availableMediaTypes);

	var sampleQueryParam = request.query.q;
	var sampleHeaderParam = request.header('h');
	var sampleHeaderParamWithDefault = request.header('h2', 'default');

	if (negotiatedMediaType == 'text/text' || negotiatedMediaType == 'text/plain') {
		response.send('hello world');
		logger.info('return hello world text/text');
	} else if (negotiatedMediaType == 'application/json') {
		responseMessage = {
			message: 'hello world',
			h: sampleHeaderParam,
			h2: sampleHeaderParamWithDefault,
			q: sampleQueryParam
		};

		response.json(responseMessage);
	} else if (negotiatedMediaType == 'text/html') {
		response.send('<html><body>hello world</body></html>');
	} else {
		response.send('hello world');
	}

	next();
}

exports.sayHello = sayHello;