var BaseController = require('./base'),
		View = require('./views');

module.exports = BaseController.extend({
	name: "Home",
	content: null,
	run: function(req, res, next){
		var self = this;
		var v = new View(res, 'home');
		v.render(self.content);
	}
});