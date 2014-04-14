function echo(req, res, next) {
	console.log('req: [%s]', req);
	console.log('res: [%s]', res);
	var message = req.params.message;
	if (message===null) {
		message=req.query.m;
	}
	console.log('message: %s', message);
	res.send(message);
	next();
}

function add(req, res, next) {
	var x = parseInt(req.query.x, 10);
	var y = parseInt(req.query.y, 10);
	var sum = x + y;
	console.log('%s + %s = %s',x ,y, sum);
	res.send(sum.toString());
	next();
}

function subtract(req, res, next) {
	var x = parseInt(req.query.x, 10);
	var y = parseInt(req.query.y, 10);
	var diff = x - y;
	console.log('%s - %s = %s',x ,y, diff);
	res.send(diff.toString());
	next();
}

exports.add = add;
exports.subtract = subtract;
