var express = require ('express');
var app = express();
var PORT = process.env.PORT || 3000;

// var middleware = require(?)
var middleware = require('./middleware.js');

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

