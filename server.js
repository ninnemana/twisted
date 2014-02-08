'use strict';

console.log('called server.js');

/**
 * Module dependencies.
 */
var express = require('express'),
		fs = require('fs');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

//Load configurations
//Set the node enviornment variable if not set before
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//Initializing system variables
var config = require('./config/config'),
		auth = require('./config/middlewares/authorization');

//Bootstrap models
var models_path = __dirname + '/app/models';
var walk = function(path) {
	fs.readdirSync(path).forEach(function(file) {
		var newPath = path + '/' + file;
		var stat = fs.statSync(newPath);
		if (stat.isFile()) {
			if (/(.*)\.(js$|coffee$)/.test(file)) {
				require(newPath);
			}
		} else if (stat.isDirectory()) {
			walk(newPath);
		}
	});
};
walk(models_path);

//bootstrap passport config
// require('./config/passport')(passport);

var app = express();

//express settings
require('./config/express')(app);

//Bootstrap routes
require('./config/routes')(app, auth);

//Start the app by listening on <port>
var port = process.env.PORT || config.port;
console.log('Port: '+port);
app.listen(port);
console.log('Express app started on port ' + port);

//expose app
exports = module.exports = app;