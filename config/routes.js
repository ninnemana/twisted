(function(){
	'use strict';

	module.exports = function(app, auth) {

	    //Home route
	    var index = require('../app/controllers/index');
	    app.get('/', index.render);

	};
}());