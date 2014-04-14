function pause(request, response, next) {
	console.log("Request handler 'pause' was called.");

	setTimeout(function() {
		console.log("pause timer fired");
		response.end();
	}, 1000*60*60);

	next();
}

exports.pause = pause;