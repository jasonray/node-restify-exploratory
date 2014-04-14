function pause(response, request) {
	console.log("Request handler 'pause' was called.");

	var url = require('url');
	var url_parts = url.parse(request.url, true);
	var query = url_parts.query;

	setTimeout(function() {
		console.log("pause timer fired");
		response.end();
	}, 1000*60*60);

}

exports.pause = pause;