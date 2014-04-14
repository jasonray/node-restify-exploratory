function pause(response, request) {
	console.log("Request handler 'pause' was called.");

	setTimeout(function() {
		console.log("pause timer fired");
		response.end();
	}, 5000);

}

exports.pause = pause;