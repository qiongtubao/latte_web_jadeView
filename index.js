(function() {
	var jade = require('pug');
	this.render = function(path, options) {
		var html = jade.renderFile(path, options);
		return html;
	}
}).call(module.exports);