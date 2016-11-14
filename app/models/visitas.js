var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Visitas', new Schema({
	time: String
})
);
