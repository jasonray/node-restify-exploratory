function pause(request, response, next) {
	var logger = require('bunyan').createLogger({name: "pauseService"});

	logger.info("Request handler 'pause' was called.");

	var duration = parseInt(request.query.duration, 10);
	if (isNaN(duration)) {
		logger.info('duration not specified, defaulting to 10 seconds');
		duration = 10*1000;
	} else {
		logger.info('duration specified to %s', duration);
	}

	setTimeout(function() {
		logger.info("pause complete");
		response.end();
		next();
	}, duration);

}

exports.pause = pause;
