var bucketlistitems = require('./../controllers/bucketlistitems.js');
var users = require('./../controllers/users.js');

module.exports = function(app) {

	app.get('/users', function(req , res) {
		users.index(req, res);
	})

	app.post('/users', function(req, res) {
		// 
	})

}