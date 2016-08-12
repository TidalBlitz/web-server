var express = require ('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function (req, res, next) {
		//new Date().toString()
		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
}; 

//app.use(middleware.requireAuthentication);
//ALL CAPS value should be constant
app.use(middleware.logger);

//request
//response


//about
app.get ('/about', middleware.requireAuthentication, function (req, res) {
	res.send ('About us!');
});

app.use(express.static(__dirname = 'public'));


/*app.listen(3000, function () {
	console.log('Express server started!');
});*/

app.listen(PORT, function () {
	console.log('Express server started at port ' + PORT + '!');
});

