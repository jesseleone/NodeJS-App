var mongoose = require('mongoose'),
	Rental = mongoose.model('Rental');

exports.create = function(req, res, next){
	var id = req.params.id;
	
	Rental.findById(id, function(err, rental){
		if(err){
			console.log(err);
		}

		/**
			XXX ADD VALIDATION FOR BOOKINGS
		**/

		rental.bookings.push({
			checkInDate: req.body.startDate,
			checkOutDate: req.body.endDate
		});

		rental.save(function(err){
			if(err){
				console.log(err);
			}
			res.json(rental);	
		});

	});

}