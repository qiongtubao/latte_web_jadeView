(function(){
	this.get = function(req, res) {
		res.sendView("jade", "./view/test.jade", {youAreUsingJade : 1});
	}
	this.path = "/jade";
}).call(module.exports);	