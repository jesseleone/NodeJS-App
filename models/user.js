var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var Users = new Schema({
	email: String,
	username: String,
	password: String
});

exports.User = mongoose.model('User', Users);