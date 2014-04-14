function pause(request, response, next) {
	console.log("Request handler 'pause' was called.");

	var duration = parseInt(request.query.duration, 10);
	if (isNaN(duration)) {
		console.log('duration not specified, defaulting to 10 seconds');
		duration = 10*1000;
	} else {
		console.log('duration specified to %s', duration);
	}

	setTimeout(function() {
		console.log("pause complete");
		response.end();
	}, duration);

	next();
}

exports.pause = pause;
