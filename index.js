
	var jade = require('pug');
	module.exports = function(path, options) {
		var html = jade.renderFile(path, options);
		return html;
	}
