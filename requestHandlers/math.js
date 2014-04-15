function add(req, res, next) {
	var logger = require('bunyan').createLogger({
		name: "mathService"
	});

	var x = parseInt(req.query.x, 10);
	var y = parseInt(req.query.y, 10);
	var sum = x + y;
	logger.info('%s + %s = %s', x, y, sum);
	res.send(sum.toString());
	next();
}

function subtract(req, res, next) {
	var logger = require('bunyan').createLogger({
		name: "mathService"
	});

	var x = parseInt(req.query.x, 10);
	var y = parseInt(req.query.y, 10);
	var diff = x - y;
	logger.info('%s - %s = %s', x, y, diff);
	res.send(diff.toString());
	next();
}

exports.add = add;
exports.subtract = subtract;